const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentCode: {
        type: Number,
        required: false
    },
    password: {
        type: String,
        required: false
    },   
    phone: {
        type: String,
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
    birthday: {
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
    department: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model('students', studentSchema);
