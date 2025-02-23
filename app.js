// console.log("Welcome to the Projects");

const express = require('express');
const app = express();
const tasks_router = require('./routes/tasks_router');

// Parse json requests
app.use(express.json());

app.use('/api/v1/tasks', tasks_router);


app.get('/hello', (req, res)=>{
    res.send("Home - Welcome");
})

// app.get('/api/v1/tasks'); -- gets all tasks
// app.post('/api/v1/tasks'); -- create a new tasks
// app.get('/api/v1/tasks/:id') -- get single tasks
// app.patch('/api/v1/tasks/id') -- update tasks
// app.delete('/api/v1/tasks/:id') -- delete tasks
 
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port number ${port}`);
})