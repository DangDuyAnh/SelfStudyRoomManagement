const express = require("express");
const registerFormSchema = require('../models/RegisterForm')
const app = express();

app.post('/registerForm/create', async(req, res) => {
    const u = new registerFormSchema(req.body);
    try{
        await u.save();
        res.send(u);
        
    }catch (error){
        console.log(error)
        res.status(500).send(error);
    }
});

app.get('/registerForm/list', async(req, res) => {
    const u = await registerFormSchema.find({}).populate({
        path: "idStudent",
        model: "students"
    }).populate({
        path: "assignedRoom",
        model: "rooms",
        populate: [{path: "idBuilding", model: "buildings"}]
    });
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/registerForm/listByStudent/:id', async(req, res) => {
    const u = await registerFormSchema.find({
        idStudent: req.params.id
    }).populate({
        path: "assignedRoom",
        model: "rooms",
        populate: [{path: "idBuilding", model: "buildings"}]
    });
    try{
        res.send(u);
    }catch (error){
        res.status(500).send(error);
    }
});

app.get('/registerForm/get/:id', async(req, res) => {
    try{
        const u = await registerFormSchema.findById(req.params.id).populate(
            {
                path: 'idStudent',
                model: "students"
            }
        );
        if(!u) res.status(404).send("No registerForm found!");
        res.send(u);
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.post('/registerForm/update/:id', async(req, res) => {
    try{
        let form = await registerFormSchema.findByIdAndUpdate(req.params.id,req.body);
        await form.save()
        res.send(form);
    }catch (error){
        console.log(error)
        res.status(500).send(error);
    }
});

app.get('/registerForm/delete/:id', async(req, res) => {
    try{
        const u = await registerFormSchema.findByIdAndDelete(req.params.id);
        if(!u) res.status(404).send("No registerForm found!");
        res.status(200).send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;