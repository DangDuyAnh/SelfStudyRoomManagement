const mongoose = require("mongoose");

const registerFormSchema = new mongoose.Schema({
    IDForm: {
        type: Number,
        required: true
    },
    IDStudent: {
        type: Number,
        required: true
    },
    IDRoomRegister: {
        type: Number,
        required: true
    },
    timeCreateRegister: {
        type: Date,
        required: false
    },
    typeRoom: {
        type: String,
        required: false
    },
    suggestRoom: {
        type: Number,
        required: false
    },
    timeUse: {
        type: Date,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    IDManager: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    timeRequest: {
        type: Date,
        required: false
    }
});
module.exports = mongoose.model('RegisterForm', registerFormSchema);
