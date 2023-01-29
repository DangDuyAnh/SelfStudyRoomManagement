const express = require("express");
const servedTimeSchema = require('../models/ServedTime')
const app = express();

app.post('/servedTime/create', async(req, res) => {
    const u = new servedTimeSchema(req.body);
    console.log(req.body);
    try{
        await u.save();
        res.send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/servedTime/list', async(req, res) => {
    const u = await servedTimeSchema.find({});
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/servedTime/get/:id', async(req, res) => {
    try{
        const u = await servedTimeSchema.findById(req.params.id);
        if(!u) res.status(404).send("No servedTime found!");
        res.send(u);
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.patch('/servedTime/update/:id', async(req, res) => {
    try{
        await servedTimeSchema.findByIdAndUpdate(req.params.id,req.body);
        await servedTimeSchema.save()
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.delete('/servedTime/delete/:id', async(req, res) => {
    try{
        const u = await servedTimeSchema.findByIdAndDelete(req.params.id);
        if(!u) res.status(404).send("No servedTime found!");
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;