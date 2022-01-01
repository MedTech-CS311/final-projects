const express = require("express");

const router = express.Router();
const Task = require("../models/Task");


router.post("/", async(req,res)=>{

    const task = new Task({
        id : req.body.id,
        title: req.body.title,
        deadline: req.body.deadline,
        description : req.body.description,
        isCompleted: req.body.isCompleted,
        priority: req.body.priority,
        isCollapsed: true
    });

    try{
        
        const t1 = await task.save();
        res.json(t1);

    }catch(err){
        res.send('Error'+ err);
    }

});


router.get("/", async(req,res)=>{

    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch (err){
        res.send('Error'+ err);
    }

});

router.get("/:id", async(req,res)=>{

    try{
        const task = await Task.findById(req.params.id);
        res.json(task);
    }catch (err){
        res.send('Error'+ err);
    }

});

router.put("/:id", async(req,res)=> {

    try{
        const task = await Task.findOneAndUpdate(
            {id: req.params.id}, req.body
        )
        res.json(task);

    }catch(err){
        res.send('Error'+ err);
    }

});

router.delete("/:id", async(req,res)=>{

    try{

        const task = await Task.findByIdAndDelete(req.params.id);
        res.json(task);

    }catch(err){
        res.send('Error'+ err);
    }

});



module.exports = router;