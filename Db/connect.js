const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://abhinavkumarblog:rd5EXVvn4glgfXB9@cluster0.hpwkq.mongodb.net/task_manager?retryWrites=true&w=majority&appName=Cluster0'

const connection = mongoose.connect(connectionString);

connection.then(()=>{
    console.log("Connected To DB");
}).catch((error)=>{
    console.log(error);
})


