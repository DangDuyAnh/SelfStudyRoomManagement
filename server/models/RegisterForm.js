const mongoose = require("mongoose");

const registerFormSchema = new mongoose.Schema({
    idStudent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "students"
    },
    idManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "managers",
        required: false
    }, 
    // Phòng học nhóm/Phòng cá nhân
    typeRoom: {
        type: String,
        required: false
    },
    //Ngày sinh viên sử dụng phòng
    dateRegister: {
        type: Date,
        required: false
    },
    startTime: {
        type: Date,
        required: false
    },
    endTime: {
        type: Date,
        required: false
    },
    numberSeats: {
        type: Number,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    status: {
        type: Number,
        required: false
    }, 
    assignedRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rooms",
        required: false
    },
});

registerFormSchema.set('timestamps', true);
module.exports = mongoose.model('RegisterForm', registerFormSchema);
