const { time } = require("console");
const mongoose = require("mongoose");

const usingRoomSchema = new mongoose.Schema({
    IDRoom: {
        type: Number,
        required: true
    },
    IDStudent: {
        type: Number,
        required: true
    },
    IDManager: {
        type: Number,
        required: true
    },
    numberSeats: {
        type: Number,
        required: false
    },
    startTime: {
        type: Date,
        required: false
    },
    endTime: {
        type: Date,
        required: false
    }
});
module.exports = mongoose.model('usingRoom', usingRoomSchema);
