const Task = require('../models/task');

const getAllTasks = (req, res)=>{
    res.status(200).json({success: true, data:[]});
}

const getTask = (req, res)=>{
    res.status(200).json({success: true, data:[]});
}

const createTask = async (req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task});
}

const updateTask = (req, res)=>{
    res.status(200).json({success: true, data:[]});
}

const deleteTask =  (req, res)=>{
    res.status(200).json({success: true, data:[]});
}

module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask}