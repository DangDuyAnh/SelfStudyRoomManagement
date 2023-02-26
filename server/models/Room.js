const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    idBuilding: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "buildings"
    },
    floor: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    numberSeats: {
        type: Number,
        required: false
    },
    typeRoom: {
        type: String,
        required: false
    },
    accessType: {
        type: String,
        required: false
    },
    numberPowerOutlet: {
        type: Number,
        required: false
    },
    numberAirCondition: {
        type: Number,
        required: false
    },
    qrCode: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model('Room', roomSchema);
