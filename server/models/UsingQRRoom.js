const mongoose = require("mongoose");

const usingQRRoomSchema = new mongoose.Schema({
    idStudent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "students"
    },
    idRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rooms"
    },
    startTime: {
        type: Date,
        required: false
    },
    endTime: {
        type: Date,
        required: false
    },
    status : {
        type: Boolean,
        required: false
    }
});
module.exports = mongoose.model('usingQRRoom', usingQRRoomSchema);
