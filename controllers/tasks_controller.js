const Task = require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');
const {createCustomError} = require('../errors/custom-error');

//Get All Tasks
const getAllTasks = asyncWrapper(async (req, res, next)=>{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
})

// Get Single Task
const getTask = asyncWrapper(async (req, res, next)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id : taskID});
        if(!task){
            return next(createCustomError("Not Found", 404));
        }
        res.status(200).json({task});
})

// Create a Task
const createTask = asyncWrapper( async (req, res, next)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task});
})

// Update a Task
const updateTask = asyncWrapper(async (req, res, next)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new: true, 
            runValidators: true
        });        
        if(!task){
            return next(createCustomError("Not Found", 404));
        }
        res.status(200).json({task});
})

// Delete a task
const deleteTask = asyncWrapper(async (req, res, next)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id : taskID});
        if(!task){
            return next(createCustomError("Not Found", 404));
        }
        res.status(200).json({task});
})

module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask}