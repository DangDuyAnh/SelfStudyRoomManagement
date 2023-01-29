const express = require("express");
const managerSchema = require('../models/Manager')
const app = express();

app.post('/manager/create', async(req, res) => {
    const u = new managerSchema(req.body);
    console.log(req.body);
    try{
        await u.save();
        res.send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/manager/list', async(req, res) => {
    const u = await managerSchema.find({});
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/manager/get/:id', async(req, res) => {
    try{
        const u = await managerSchema.findById(req.params.id);
        if(!u) res.status(404).send("No manager found!");
        res.send(u);
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.patch('/manager/update/:id', async(req, res) => {
    try{
        await managerSchema.findByIdAndUpdate(req.params.id,req.body);
        await managerSchema.save()
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.delete('/manager/delete/:id', async(req, res) => {
    try{
        const u = await managerSchema.findByIdAndDelete(req.params.id);
        if(!u) res.status(404).send("No manager found!");
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;