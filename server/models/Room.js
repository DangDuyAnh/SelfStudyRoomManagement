const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    IDRoom: {
        type: Number,
        required: true
    },
    IDBuilding: {
        type: Number,
        required: true
    },
    floors: {
        type: Number,
        required: false
    },
    nameBulding: {
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
    acessType: {
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
    status: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model('Room', roomSchema);
