const mongoose =  require('mongoose');

const TaskSchema =  new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user',
    required : true
},
  title : {type : String , required : true},
  description : {type : String , required : true},
  isComplete:{type : Boolean , default:false}
  
}, {timestamps:true});

const Task = mongoose.model('task' , TaskSchema);

module.exports = Task;