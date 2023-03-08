const RoomModel = require("../models/Room");
const httpStatus = require("../utils/httpStatus");
const roomController = {};
const QRCode = require('qrcode');

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

module.exports = roomController;