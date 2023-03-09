const express = require("express");
const roomSchema = require('../models/Room')
const app = express();
const roomController = require("../controllers/Room");
const {asyncWrapper} = require("../utils/asyncWrapper");

app.post(
    '/room/create',
    asyncWrapper(roomController.create)
);

app.get('/room/list', async(req, res) => {
    const u = await roomSchema.find({});
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.post('/room/list-by-building-name', 
    asyncWrapper(roomController.listByBuildingName));

app.post("/room/status",
    asyncWrapper(roomController.status)
);

app.post("/room/status-by-name",
    asyncWrapper(roomController.statusByName)
);

app.get('/room/get/:id', async(req, res) => {
    try{
        const u = await roomSchema.findById(req.params.id).populate({
            path: 'idBuilding',
            model: 'buildings'
        });
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