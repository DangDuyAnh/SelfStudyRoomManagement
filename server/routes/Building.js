const express = require("express");
const buildingSchema = require('../models/Building')
const app = express();
const buildingController = require("../controllers/Building");
const {asyncWrapper} = require("../utils/asyncWrapper");

app.post(
    '/building/create',
    asyncWrapper(buildingController.create) 
);

app.get(
    '/building/findRooms/:id',
    asyncWrapper(buildingController.findRooms)
)

app.get('/building/list', async(req, res) => {
    const u = await buildingSchema.find({});
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/building/get/:id', async(req, res) => {
    try{
        const u = await buildingSchema.findById(req.params.id);
        if(!u) res.status(404).send("No building found!");
        res.send(u);
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.post('/building/update/:id', async(req, res) => {
    try{
        let u = await buildingSchema.findByIdAndUpdate(req.params.id,req.body);
        await u.save()
        res.send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.delete('/building/delete/:id', async(req, res) => {
    try{
        const u = await buildingSchema.findByIdAndDelete(req.params.id);
        if(!u) res.status(404).send("No building found!");
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;