const express = require('express');
const tasks_router = express.Router();
const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/tasks_controller');

// '/' will be replaced by /api/v1/tasks
tasks_router.get('/', getAllTasks);
tasks_router.post('/', createTask);
tasks_router.get('/:id', getTask);
tasks_router.patch('/:id', updateTask);
tasks_router.delete('/:id', deleteTask);

module.exports = tasks_router;