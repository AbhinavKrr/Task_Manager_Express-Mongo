const express = require('express');
const app = express();
const tasks_router = require('./routes/tasks_router');
const connectDB = require('./Db/connect');
require('dotenv').config();
const handleUnknownRoutes = require('./middleware/unknown');
const errroHandlerMiddleware = require('./middleware/error-handler');

// Serve static files middleware express.static()

app.use(express.static('./public'));

// Parse json requests using middle ware
app.use(express.json());


// applying this all routes/paths inside task router
app.use('/api/v1/tasks', tasks_router);

app.use(handleUnknownRoutes);
app.use(errroHandlerMiddleware);

// app.get('/hello', (req, res)=>{
//     res.send("Home - Welcome");
// })

// Done in routes
// app.get('/api/v1/tasks'); -- gets all tasks
// app.post('/api/v1/tasks'); -- create a new tasks
// app.get('/api/v1/tasks/:id') -- get single tasks
// app.patch('/api/v1/tasks/id') -- update tasks
// app.delete('/api/v1/tasks/:id') -- delete tasks
 
const port = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Server is running on port number ${port}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

start();

// Mongo-DB --> document === just like table => it is a set of key value pairs

// Data Types==Strings, Numbers, Arrays, objects, boolean => just like-> Local server pe install, Cloud Servers

// Atlas - Mongo db free hosting
// document in mongodb represnts 1 single item - ex_ information about a product

// Database->Collection->document
// Collections are basically object-array like javasript
