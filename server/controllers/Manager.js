const ManagerModel = require("../models/Manager");
const httpStatus = require("../utils/httpStatus");
const managerController = {};

managerController.login = async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body;

        let manager = await ManagerModel.findOne({
            email: email,
            password : password
        })

        if (!manager) {
            return res.status(httpStatus.BAD_REQUEST).json({
                message: 'Email or password incorrect'
            });
        } else {
            return res.status(httpStatus.OK).send(manager);
        }
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = managerController;