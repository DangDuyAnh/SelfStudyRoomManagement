const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String
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
    },
    role : {
        type: String
    }
});
module.exports = mongoose.model('Manager', managerSchema);
