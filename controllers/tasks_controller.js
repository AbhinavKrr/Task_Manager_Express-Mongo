const Task = require('../models/task');

//Get All Tasks
const getAllTasks = async (req, res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }
    catch(err){
        res.status(404).json({msg: err});
    }
}

// Get Single Task
const getTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id : taskID});
        if(!task){
            return res.status(404).json({msg:"No data Found"});
        }
        res.status(200).json({task});
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

// Create a Task
const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task});
    }
    catch(err){
        res.status(500).json({msg:err});
    }
}

// Update a Task
const updateTask = (req, res)=>{
    res.status(200).json({success: true, data:[]});
}

// Delete a task
const deleteTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id : taskID});
        if(!task){
            return res.status(404).json({msg:"No data Found"});
        }
        res.status(200).json({task:task,deleted:true});
    }
    catch(err){
        res.status(500).json({msg:err});
    }
}

module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask}