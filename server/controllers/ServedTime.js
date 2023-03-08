const ServedTimeModel = require("../models/ServedTime");
const BuildingModel = require("../models/Building")
const RoomModel = require("../models/Room");
const httpStatus = require("../utils/httpStatus");
const { updateOne } = require("../models/Room");
const servedTimeController = {};

servedTimeController.get = async (req, res, next) => {
    try{
        const room = await RoomModel.findById(req.params.id).populate({
            path: "idBuilding",
            models: "buildings"}
        )
        const schedules = await ServedTimeModel.find({idRoom: req.params.id})
        return res.status(httpStatus.OK).json({
            room: room,
            schedules: schedules
        })
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

servedTimeController.deleteMany = async (req, res, next) => {
    try {
        const {
            idRoom,
            startEffectiveDate,
            endEffectiveDate
        } = req.body
        console.log(req.body)
        const schedules = await ServedTimeModel.deleteMany({
            idRoom: idRoom,
            startEffectiveDate: new Date(startEffectiveDate),
            endEffectiveDate: new Date(endEffectiveDate)
        })
        return res.status(httpStatus.OK).json({schedules})
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

servedTimeController.search = async(req, res, next) => {
    try {
        const {
            idRoom,
            date,
            idBuilding
        } = req.body
        let schedules = await ServedTimeModel.find();
          
        schedules = schedules.filter(item => {
            d1 = new Date(date);
            d2 = new Date(item.startEffectiveDate);
            d3 = new Date(item.endEffectiveDate);
            return (d1.getTime() >= d2.getTime()) && (d1.getTime() <= d3.getTime())  
        })

        let rooms = await RoomModel.find().populate({ path: 'idBuilding', model: 'buildings'});

        if (idRoom && (idRoom !== "")) rooms = rooms.filter(item => item._id.toString() == idRoom);
        if (idBuilding && (idBuilding !== "")) {   
            rooms = rooms.filter(item => {
                return item.idBuilding._id.toString() == idBuilding});
        }

        let returnRoom = []
        rooms.forEach((item, index) => {
            let servedTime = []
            schedules.forEach(i => {
                if (i.idRoom.toString() == item._id.toString())
                {   
                    servedTime.push(i)
                }
            })
            returnRoom.push({
                room: item,
                serveTime : servedTime   
                });
        })
        return res.status(httpStatus.OK).send(returnRoom)
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = servedTimeController;