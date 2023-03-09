const express = require("express");
const usingQRRoomSchema = require('../models/UsingQRRoom')
const app = express();

app.post('/usingQRRoom/create', async(req, res) => {
    const u = new usingQRRoomSchema(req.body);
    console.log(req.body);
    try{
        await u.save();
        res.send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.post('/qr-scan/:id', async(req, res) => {
    const u = new usingQRRoomSchema({
        idRoom: req.params.id,
        ...req.body});
    console.log(req.body);
    try{
        await u.save();
        res.send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/usingQRRoom/byStudent', async(req, res) => {
    try{
        const u = await usingQRRoomSchema.find({idStudent: req.params.id});
        if(!u) res.status(404).send("No usingQRRoom found!");
        res.send(u);
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/usingQRRoom/list', async(req, res) => {
    const u = await usingQRRoomSchema.find({});
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/usingQRRoom/get/:id', async(req, res) => {
    try{
        const u = await usingQRRoomSchema.findById(req.params.id);
        if(!u) res.status(404).send("No usingQRRoom found!");
        res.send(u);
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.patch('/usingQRRoom/update/:id', async(req, res) => {
    try{
        await usingQRRoomSchema.findByIdAndUpdate(req.params.id,req.body);
        await usingQRRoomSchema.save()
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.delete('/usingQRRoom/delete/:id', async(req, res) => {
    try{
        const u = await usingQRRoomSchema.findByIdAndDelete(req.params.id);
        if(!u) res.status(404).send("No usingQRRoom found!");
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;