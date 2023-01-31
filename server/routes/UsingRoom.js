const express = require("express");
const usingRoomSchema = require('../models/UsingRoom')
const app = express();

app.post('/usingRoom/create', async(req, res) => {
    const u = new usingRoomSchema(req.body);
    console.log(req.body);
    try{
        await u.save();
        res.send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/usingRoom/list', async(req, res) => {
    const u = await usingRoomSchema.find({});
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/usingRoom/get/:id', async(req, res) => {
    try{
        const u = await usingRoomSchema.findById(req.params.id);
        if(!u) res.status(404).send("No usingRoom found!");
        res.send(u);
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.patch('/usingRoom/update/:id', async(req, res) => {
    try{
        await usingRoomSchema.findByIdAndUpdate(req.params.id,req.body);
        await usingRoomSchema.save()
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.delete('/usingRoom/delete/:id', async(req, res) => {
    try{
        const u = await usingRoomSchema.findByIdAndDelete(req.params.id);
        if(!u) res.status(404).send("No usingRoom found!");
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;