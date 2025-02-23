const express = require('express');
const tasks_router = express.Router();
const {getTasks} = require('../controllers/tasks_controller');

// / will be replaced by /api/v1/tasks
tasks_router.get('/', getTasks);


module.exports = tasks_router;