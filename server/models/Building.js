const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema({
    IDBuilding: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    numberFloor: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model('Building', buildingSchema);
