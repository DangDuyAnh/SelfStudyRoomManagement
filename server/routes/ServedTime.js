const express = require("express");
const xlsx = require('xlsx');
const mongoose = require('mongoose');
const servedTimeSchema = require('../models/ServedTime')
const app = express();
const servedTimeController = require("../controllers/ServedTime");
const {asyncWrapper} = require("../utils/asyncWrapper");

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

app.get(
    '/servedTime/get/:id',
    asyncWrapper(servedTimeController.get));

app.patch('/servedTime/update/:id', async(req, res) => {
    try{
        await servedTimeSchema.findByIdAndUpdate(req.params.id,req.body);
        await servedTimeSchema.save()
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.post('/servedTime/deleteByDate',
    asyncWrapper(servedTimeController.deleteMany));

app.post("/servedTime/search",
    asyncWrapper(servedTimeController.search));

app.get('/servedTime/delete/:id', async(req, res) => {
    try{
        const u = await servedTimeSchema.findByIdAndDelete(req.params.id);
        if(!u) res.status(404).send("No servedTime found!");
        res.status(200).send();
        
    }catch (error){
        res.status(500).send(error);
    }
});

app.post('/servedTime/createByExcel', async(req, res) => {
    const startEffectiveDate = req.body.startEffectiveDate;
    const endEffectiveDate = req.body.endEffectiveDate;
    const IdRoom = mongoose.Types.ObjectId('6408fb4684334bfb973c4ae6');
    const startTime = "2023-03-10 14:00:00", endTime = "2023-03-10 16:30:00";
    const file = req.body.file;
    console.log('starttttttttttttttttttttt');
    if(file)
    {const workbook = xlsx.read(file, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    IdRoom = worksheet['A2'] ? worksheet['A2'].v : -1;
    startTime = worksheet['B2'] ? worksheet['B2'].v : "";
    endTime = worksheet['C2'] ? worksheet['C2'].v : "";
    console.log(endTime);
    console.log("endTime");
}
    
    const u = new servedTimeSchema({
        idRoom: IdRoom,
        startTime: startTime,
        endTime: endTime,
        startEffectiveDate: startEffectiveDate,
        endEffectiveDate: endEffectiveDate
    });

    try{
        await u.save();
        res.send(u);
        
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;