const BuildingModel = require("../models/Building");
const httpStatus = require("../utils/httpStatus");
const buildingController = {};
const RoomModel = require("../models/Room");
const roomController = require("./Room");

buildingController.create = async (req, res, next) => {
    try {
        const {
            name,
            address
        } = req.body;

        let building = await BuildingModel.findOne({
            name: name
        })

        if (building) {
            return res.status(httpStatus.BAD_REQUEST).json({
                message: "Tên tòa nhà đã tồn tại"
            });
        }

        building = new BuildingModel({
            name: name,
            address: address,
            numberFloor: 1
        })
        building.save();
        res.status(httpStatus.CREATED).json({
            building
        })
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

buildingController.findRooms = async (req, res, next) => {
    try {
        let buildingId = req.params.id;
        let building = await BuildingModel.findById(buildingId);

        let rooms = await RoomModel.find({
            idBuilding: buildingId
        })
        res.status(httpStatus.OK).json({
            building: building,
            rooms: rooms
        })

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = buildingController;