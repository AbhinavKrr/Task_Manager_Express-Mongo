const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://abhinavkumarblog:rd5EXVvn4glgfXB9@cluster0.hpwkq.mongodb.net/task_manager?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = (url) =>{
    return mongoose.connect(connectionString);
}

module.exports = connectDB;



// First connect to data base then start the server program