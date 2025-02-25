const mongoose = require('mongoose');

const connectDB = (url) =>{
    return mongoose.connect(url);
}

module.exports = connectDB;


// First connect to data-base then start the server program