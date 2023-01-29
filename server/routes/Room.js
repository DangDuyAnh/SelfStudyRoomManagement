// const friendController = require("../controllers/Friends");
const express = require("express");
// const friendsRoutes = express.Router();
// const ValidationMiddleware = require("../middlewares/validate");
// const auth = require("../middlewares/auth");
const roomSchema = require('../models/Room')
const app = express();

app.post('/room/create', async(req, res) => {
    const u = new roomSchema(req.body);
    console.log(req.body);
    try{
        await u.save();
        res.send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/room/list', async(req, res) => {
    const u = await roomSchema.find({});
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/room/get/:id', async(req, res) => {
    try{
        const u = await roomSchema.findById(req.params.id);
        if(!u) res.status(404).send("No room found!");
        res.send(u);
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.patch('/room/update/:id', async(req, res) => {
    try{
        await roomSchema.findByIdAndUpdate(req.params.id,req.body);
        await roomSchema.save()
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.delete('/room/delete/:id', async(req, res) => {
    try{
        const u = await roomSchema.findByIdAndDelete(req.params.id);
        if(!u) res.status(404).send("No room found!");
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;