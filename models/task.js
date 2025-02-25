// Making schema for our NoSQL database document

const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({
//     name:String, 
//     completed:Boolean
// })

// Adding schema validations as of the pevious setup, empty fileds or empty objects can be send to database
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
        required: [true, 'Must be a String'],
        trim:true,
        maxlength:[20, 'name cannot be more than 20 characters']
    }, 
    completed:{
        type:Boolean,
        default: false,
    }
})


//Takes an input of schema and then use that schema to provide crud operations
module.exports = mongoose.model('Task', TaskSchema);



// Model is representation of collection
// In Mongoose a model is a wrapper for the schema.
// if schema defines the structure of the document then a mongoose model provides an interface(methods) to access the Database for CRUD.

// Database ==> Models(Collections) ==> documents