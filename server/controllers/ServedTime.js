const ServedTimeModel = require("../models/ServedTime");
const BuildingModel = require("../models/Building")
const RoomModel = require("../models/Room");
const httpStatus = require("../utils/httpStatus");
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
        console.log("yeah")
        let schedules = await ServedTimeModel.find().populate({
            path: 'idRoom',
            model: 'rooms',
            populate: [{ path: 'idBuilding', model: 'buildings'}]
        });
          
        schedules = schedules.filter(item => {
            d1 = new Date(date);
            d2 = new Date(item.startEffectiveDate);
            d3 = new Date(item.endEffectiveDate);
            return (d1.getTime() >= d2.getTime()) && (d1.getTime() <= d3.getTime())  
        })
        if (idRoom) schedules = schedules.filter(item => item.idRoom._id == idRoom);
        if (idBuilding) schedules = schedules.filter(item => item.idRoom.idBuilding._id == idRoom);
        return res.status(httpStatus.OK).json({schedules})
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = servedTimeController;