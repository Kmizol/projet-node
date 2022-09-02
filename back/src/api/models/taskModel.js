const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let taskSchema = new Schema({
   
   text :{
    type:String,
    required: true
   },
   etat:{
   type:Boolean,
   default:"0"
   }
},{versionKey: false});

const TaskModel = mongoose.model('Objectif', taskSchema);

module.exports = TaskModel;