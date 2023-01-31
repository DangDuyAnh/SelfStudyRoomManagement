const mongoose = require("mongoose");

const usingQRRoomSchema = new mongoose.Schema({
    ID_Student: {
        type: Number,
        required: true
    },
    ID_Room: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('usingQRRoom', usingQRRoomSchema);
