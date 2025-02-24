const getAllTasks = (req, res)=>{
    res.status(200).json({success: true, data:[]});
}

const getTask = (req, res)=>{
    res.status(200).json({success: true, data:[]});
}

const createTask = (req, res)=>{
    res.status(201).json(req.body);
}

const updateTask = (req, res)=>{
    res.status(200).json({success: true, data:[]});
}

const deleteTask =  (req, res)=>{
    res.status(200).json({success: true, data:[]});
}

module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask}