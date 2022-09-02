const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
   text :{
    type:String,
    text:String,
   }
});

const TaskModel = mongoose.model('Objectif', taskSchema);

module.exports = TaskModel;