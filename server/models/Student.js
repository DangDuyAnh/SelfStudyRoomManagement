const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    studentCode: {
        type: Number,
        required: false
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
    class: {
        type: String,
        required: false
    },
    avatarLink: {
        type: String,
        required: false
    },
    schoolYear: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model('students', studentSchema);
