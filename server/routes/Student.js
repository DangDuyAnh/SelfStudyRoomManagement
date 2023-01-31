const express = require("express");
const studentSchema = require('../models/Student')
const app = express();

app.post('/student/create', async(req, res) => {
    const u = new studentSchema(req.body);
    console.log(req.body);
    try{
        await u.save();
        res.send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/student/list', async(req, res) => {
    const u = await studentSchema.find({});
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/student/get/:id', async(req, res) => {
    try{
        const u = await studentSchema.findById(req.params.id);
        if(!u) res.status(404).send("No student found!");
        res.send(u);
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.patch('/student/update/:id', async(req, res) => {
    try{
        await studentSchema.findByIdAndUpdate(req.params.id,req.body);
        await studentSchema.save()
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.delete('/student/delete/:id', async(req, res) => {
    try{
        const u = await studentSchema.findByIdAndDelete(req.params.id);
        if(!u) res.status(404).send("No student found!");
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;