const RoomModel = require("../models/Room");
const RegisterFormModel = require("../models/RegisterForm");
const usingQRRoomModel = require("../models/UsingQRRoom");
const httpStatus = require("../utils/httpStatus");
const roomController = {};
const QRCode = require('qrcode');
const ServedTimeModel = require("../models/ServedTime");

roomController.create = async (req, res, next) => {
    try {
        const {
            idBuilding,
            floor,
            name,
            numberSeats,
            typeRoom,
            accessType,
            numberPowerOutlet,
            numberAirCondition
        } = req.body

        let room = await RoomModel.findOne({
            name: name,
            idBuilding : idBuilding
        })

        if (room) {
            return res.status(httpStatus.BAD_REQUEST).json({
                message: "Phòng học này đã tồn tại"
            });
        }

        room = new RoomModel(
            req.body
        )

        if (accessType == "Phòng tự do") {
            let qr= await QRCode.toDataURL('http://localhost:5000/qr-scan/' + room._id);
            room.qrCode = qr.toString();
        } 
        room.save();
        res.status(httpStatus.CREATED).json({
            room
        }) 

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

roomController.listByBuildingName = async (req, res, next) => {
    try {
        let rooms = await RoomModel.find().populate({ path: 'idBuilding', model: 'buildings'});
        rooms = rooms.filter(item => item.idBuilding._id.toString() == req.body.buildingId);
        return res.status(httpStatus.OK).json({rooms})
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

const compareTimeOnlyBigger = (first, second) => {
    let time1 = first.getHours()*3600 + first.getMinutes()*60 + first.getSeconds();
    let time2 = second.getHours()*3600 + second.getMinutes() + second.getSeconds();
    return (time1 >= time2)
}

const compareTimeOnlySmaller = (first, second) => {
    let time1 = first.getHours()*3600 + first.getMinutes()*60 + first.getSeconds();
    let time2 = second.getHours()*3600 + second.getMinutes() + second.getSeconds();
    return (time1 <= time2)
}

roomController.status = async (req, res, next) => {
    try {
        const {
            idRoom,
            date,
            idBuilding,
            status
        } = req.body
        
        let rooms = await RoomModel.find().populate({ path: 'idBuilding', model: 'buildings'});
        if (idRoom && (idRoom !== "")) rooms = rooms.filter(item => item._id.toString() == idRoom);
        if (idBuilding && (idBuilding !== "")) {   
            rooms = rooms.filter(item => {
                return item.idBuilding._id.toString() == idBuilding});
        }
        let registerForm = await RegisterFormModel.find();

        registerForm = registerForm.filter(item => {
            if (!item.status) return false
            d1 = new Date(date);
            d2 = new Date(item.dateRegister)
            d3 = new Date(item.startTime);
            d4 = new Date(item.endTime);
            return (datesAreOnSameDay(d1, d2)) && (compareTimeOnlyBigger(d1, d3))  && (compareTimeOnlySmaller(d1, d4)) 
        })

        let usingQRRoom = await usingQRRoomModel.find();

        usingQRRoom = usingQRRoom.filter(item => {
            if (!item.status) return false
            d1 = new Date(date);
            d2 = new Date(item.startTime)
            d3 = new Date(item.startTime);
            d4 = new Date(item.endTime);
            return (datesAreOnSameDay(d1, d2)) && (compareTimeOnlyBigger(d1, d3))  && (compareTimeOnlySmaller(d1, d4)) 
        })

        let returnRoom = [];
        rooms.forEach((item, index) => {
            let sitting = 0;
            let status = "";
            let numberSeats = item.numberSeats
            registerForm.forEach(i => {
                if (i.assignedRoom) {
                if (i.assignedRoom.toString() == item._id.toString())
                {   
                    sitting = sitting + i.numberSeats
                }
            }
            })
            usingQRRoom.forEach(i => {
                if (i.idRoom.toString() == item._id.toString())
                {   
                    sitting = sitting + 1
                }
            })
            if (( 1.0 * sitting / numberSeats) < 0.25) status = "Phòng vắng"
            else if ((( 1.0 * sitting / numberSeats) >= 0.25) && (( 1.0 * sitting / numberSeats) < 0.5)) status = "Bình thường"
            else status = "Phòng đầy"
            returnRoom.push({
                room: item,
                sitting: sitting,
                status: status
                });
        })

        if (status && (status !== "") && (status !== "Tất cả")) returnRoom = returnRoom.filter(item => item.status.toString() == status);
        return res.status(httpStatus.OK).send(returnRoom);

    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

roomController.statusForRF = async (req, res, next) => {
    try {
        const {
            date,
            startTime,
            endTime,
            typeRoom
        } = req.body

        let schedules = await ServedTimeModel.find();
        let d1 = new Date(date);
        let t1 = new Date(startTime);
        let t2 = new Date(endTime);
        schedules = schedules.filter(item => {
            d2 = new Date(item.startEffectiveDate);
            d3 = new Date(item.endEffectiveDate);

            t3 = new Date(item.startTime);
            t4 = new Date(item.endTime);
            return (d1.getTime() >= d2.getTime()) && (d1.getTime() <= d3.getTime()) && (compareTimeOnlyBigger(t1, t3))  && (compareTimeOnlySmaller(t2, t4))   
        })
        
        let rooms = await RoomModel.find({typeRoom: typeRoom}).populate({ path: 'idBuilding', model: 'buildings'});
        let registerForm = await RegisterFormModel.find();
        registerForm = registerForm.filter(item => {
            if (!item.status) return false
            d2 = new Date(item.dateRegister)
            t3 = new Date(item.startTime);
            t4 = new Date(item.endTime);
            return (datesAreOnSameDay(d1, d2)) && ((compareTimeOnlySmaller(t1, t3))  && (compareTimeOnlySmaller(t2, t4))  || (compareTimeOnlySmaller(t3, t1))  && (compareTimeOnlySmaller(t4, t2)))
        })

        let usingQRRoom = await usingQRRoomModel.find();

        usingQRRoom = usingQRRoom.filter(item => {
            if (!item.status) return false
            d2 = new Date(item.startTime)
            t3 = new Date(item.startTime);
            t4 = new Date(item.endTime);
            return (datesAreOnSameDay(d1, d2)) && ((compareTimeOnlySmaller(t1, t3))  && (compareTimeOnlySmaller(t2, t4))  || (compareTimeOnlySmaller(t3, t1))  && (compareTimeOnlySmaller(t4, t2)))
        })

        let availableIdRoom = []
        schedules.forEach(item => availableIdRoom.push(item.idRoom.toString()));
        let returnRoom = [];

        rooms.forEach((item, index) => {
            if (availableIdRoom.includes(item._id.toString())){
                let sitting = 0;
                let status = "";
                let numberSeats = item.numberSeats
                registerForm.forEach(i => {
                    if (i.assignedRoom) {
                    if (i.assignedRoom.toString() == item._id.toString())
                    {   
                        sitting = sitting + i.numberSeats
                    }
                }
                })
                usingQRRoom.forEach(i => {
                    if (i.idRoom.toString() == item._id.toString())
                    {   
                        sitting = sitting + 1
                    }
                })
                if (( 1.0 * sitting / numberSeats) < 0.25) status = "Phòng vắng"
                else if ((( 1.0 * sitting / numberSeats) >= 0.25) && (( 1.0 * sitting / numberSeats) < 0.5)) status = "Bình thường"
                else status = "Phòng đầy"
                returnRoom.push({
                    room: item,
                    sitting: sitting,
                    status: status
                    });
            }
        })
        returnRoom.sort(function(a, b){return a.sitting/a.room.numberSeats - b.sitting/b.room.numberSeats});

        return res.status(httpStatus.OK).send(returnRoom);

    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

roomController.statusByName = async (req, res, next) => {
    try {
        console.log("res", req.body)
        const {
            roomType,
            date,
            buildingName,
            status
        } = req.body
        
        let rooms = await RoomModel.find().populate({ path: 'idBuilding', model: 'buildings'});
        if (roomType && (roomType !== "")) rooms = rooms.filter(item => item.typeRoom.toString() == roomType);
        if (buildingName && (buildingName !== "")) {   
            rooms = rooms.filter(item => {
                return item.idBuilding.name.toString() == buildingName});
        }
        let registerForm = await RegisterFormModel.find();

        registerForm = registerForm.filter(item => {
            if (!item.status) return false
            d1 = new Date(date);
            d2 = new Date(item.dateRegister)
            d3 = new Date(item.startTime);
            d4 = new Date(item.endTime);
            return (datesAreOnSameDay(d1, d2)) && (compareTimeOnlyBigger(d1, d3))  && (compareTimeOnlySmaller(d1, d4)) 
        })

        let usingQRRoom = await usingQRRoomModel.find();

        usingQRRoom = usingQRRoom.filter(item => {
            if (!item.status) return false
            d1 = new Date(date);
            d2 = new Date(item.startTime)
            d3 = new Date(item.startTime);
            d4 = new Date(item.endTime);
            return (datesAreOnSameDay(d1, d2)) && (compareTimeOnlyBigger(d1, d3))  && (compareTimeOnlySmaller(d1, d4)) 
        })

        let returnRoom = [];
        rooms.forEach((item, index) => {
            let sitting = 0;
            let status = "";
            let numberSeats = item.numberSeats
            registerForm.forEach(i => {
                if (i.assignedRoom) {
                if (i.assignedRoom.toString() == item._id.toString())
                {   
                    sitting = sitting + i.numberSeats
                }
            }
            })
            usingQRRoom.forEach(i => {
                if (i.idRoom.toString() == item._id.toString())
                {   
                    sitting = sitting + 1
                }
            })
            if (( 1.0 * sitting / numberSeats) < 0.25) status = "Phòng vắng"
            else if ((( 1.0 * sitting / numberSeats) >= 0.25) && (( 1.0 * sitting / numberSeats) < 0.5)) status = "Bình thường"
            else status = "Phòng đầy"
            returnRoom.push({
                room: item,
                sitting: sitting,
                status: status
                });
        })

        if (status && (status !== "") && (status !== "Tất cả")) returnRoom = returnRoom.filter(item => item.status.toString() == status);
        return res.status(httpStatus.OK).send(returnRoom);

    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = roomController;