const mongoose = require("mongoose");

const servedTimeSchema = new mongoose.Schema({
    IDRoom: {
        type: Number,
        required: true
    },
    startTime: {
        type: Date,
        required: false
    },
    endTime: {
        type: Date,
        required: false
    },
    startEffectiveDate: {
        type: Date,
        required: false
    },
    endEffectiveDate: {
        type: Date,
        required: false
    }
});
module.exports = mongoose.model('ServedTime', servedTimeSchema);
