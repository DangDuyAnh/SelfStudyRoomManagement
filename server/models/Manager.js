const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
    IDManager: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    avatarLink: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model('Manager', managerSchema);
