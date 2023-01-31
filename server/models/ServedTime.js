const mongoose = require("mongoose");

const servedTimeSchema = new mongoose.Schema({
    IDRoom: {
        type: Number,
        required: true
    },
    listTime: {
        type: Date,
        required: false
    }
});
module.exports = mongoose.model('ServedTime', servedTimeSchema);
