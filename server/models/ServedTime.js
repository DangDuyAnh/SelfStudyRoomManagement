const mongoose = require("mongoose");

const servedTimeSchema = new mongoose.Schema({
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
