// Making schema for our NoSQL database document

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:String, completed:Boolean
})

//Takes an input of schema and then use that schema to provide crud operations
module.exports = mongoose.model('Task', TaskSchema);



// Model is representation of collection
// In Mongoose a model is a wrapper for the schema.
// if schema defines the structure of the document then a mongoose model provides an interface(methods) to access the Database for CRUD.