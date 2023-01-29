const express = require("express");
const app = express();
const url = "mongodb+srv://vanh:vanh@qlht.kpuwx.mongodb.net/qlph?retryWrites=true&w=majority";
const port = 3000;
const Room = require('./routes/Room');
const ServedTime = require('./routes/ServedTime');
const Student = require('./routes/Student');
const Manager = require('./routes/Manager');
const RegisterForm = require('./routes/RegisterForm');
const UsingQRRoom = require('./routes/UsingQRRoom');
const UsingRoom = require('./routes/UsingRoom');
const Building = require('./routes/Building');
app.use(express.json());
app.listen(port, () => {
    console.log("server start - " + port);
})

const mongoose = require("mongoose");

// connect to mongodb
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(res => {
    console.log("connected to mongodb");
})
    .catch(err => {
        console.log(err);
    })

app.use(Room);
app.use(ServedTime);
app.use(Student);
app.use(Manager);
app.use(RegisterForm);
app.use(UsingQRRoom);
app.use(UsingRoom);
app.use(Building);
