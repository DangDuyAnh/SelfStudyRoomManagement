const StudentModel = require("../models/Student");
const httpStatus = require("../utils/httpStatus");
const studentController = {};

studentController.login = async (req, res, next) => {
    try {
        const {
            studentCode,
            password
        } = req.body;

        console.log("req.body", req.body)

        let student = await StudentModel.findOne({
            studentCode: studentCode,
            password : password
        })

        console.log("student", student)


        if (!student) {
            return res.status(httpStatus.BAD_REQUEST).json({
                message: 'MSSV or password incorrect'
            });
        } else {
            return res.status(httpStatus.OK).send(student);
        }
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = studentController;