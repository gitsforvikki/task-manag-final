const express = require('express');
const router = express.Router();
const {body , validationResult}  = require('express-validator');
const Task = require('../models/task');
const User = require('../models/user');
const authenticate = require('../middlewares/authenticate');



//upload task
router.post('/upload',authenticate , [
  body('title').notEmpty().withMessage('Title is Required'),
  body('description').notEmpty().withMessage('Description required is Required'),
  
],async(request , response)=>{
  let errors =  validationResult(request);
  if(!errors.isEmpty()){
    return response.status(401).json({errors : errors.array()});
  }

  try{

    //get form data
    let {title , description } = request.body;
     let user = request.user.id;

    let task  = new Task({user , title , description });
    task = await task.save();
    response.status(200).json({
      msg : 'Task is Uploaded',
      task : task
    });
  }
  catch(error){
    console.log(error);
    response.status(500).json({errors : [{msg : error.message}]});
  }
});


//get all tasks of particular user
router.get('/all-tasks' , authenticate , async(request , response)=>{
  try{
      let user =  await User.findById(request.user.id);
      let allTaks = await Task.find({user : user});
      response.status(200).json({tasks : allTaks});
  }
  catch (error) {
    console.error(error);
    response.status(500).json({errors : [{msg : error.message}]});
}
}),

//get a single task by id


router.get('/:taskId' , authenticate , async (request , response)=>{
  try{

    let taskId = request.params.taskId;
    let task =  await Task.findById(taskId);
    response.status(200).json({task : task});
  }
  catch(error){
    console.log(error);
    response.status(500).json({errors : [{msg : error.message}]});
  }
});


//update task

router.put('/update/:taskId',authenticate,[
  body('title').notEmpty().withMessage('Title is Required'),
  body('description').notEmpty().withMessage('Description is Required')
], async(request , response)=>{
  let errors =  validationResult(request);
  if(!errors.isEmpty()){
      return response.status(401).json({errors : errors.array()});
  }

  try{
    let taskId =  request.params.taskId;
      let {title ,  description } = request.body;
      let task = await Task.findOne({_id : taskId});
      if(!task){
          return response.status(401).json({
              errors : [{msg : 'task not found'}]
          })
      }
    
      
      let taskObj ={};
      taskObj.user = request.user.id;
      if(title) taskObj.title = title;
      if(description) taskObj.description = description;
         
          
      //update to db
      task = await Task.findOneAndUpdate({_id : taskId},{
          $set : taskObj
      },{new : true})



      response.status(200).json({
          msg : 'Task update successfully..',
          task : task
      })


  }
  catch(error){
      console.log(error);
      response.status(500).json({
          errors :[{msg : error.message}]
      });
  }
});

//delete task
router.delete('/:taskId' , authenticate , async(request , response)=>{
  try{
      let taskId =  request.params.taskId;
      let task =  await Task.findById(taskId);
      if(!task){
          return response.status(401).json({msg : 'No Task found'})
      }
      task = await Task.findByIdAndRemove(taskId);
      response.status(200).json({
          msg : 'Task is Deleted',
          task : task
      });
  }
  catch(error){
      console.log(error);
      response.status(500).json({errors : [{msg : error.message}]})
  }
});



//change status

router.put('/update/status/:taskId',authenticate, async(request , response)=>{
  try{
    let taskId =  request.params.taskId;
      let task = await Task.findOne({_id : taskId});
      if(!task){
          return response.status(401).json({
              errors : [{msg : 'task not found'}]
          })
      }

      //update to db
      task = await Task.findOneAndUpdate({_id : taskId},{
          $set : {isComplete : task.isComplete ? false : true}
      },{new : true})

      response.status(200).json({
          msg : 'Status update successfully..',
          task : task
      })


  }
  catch(error){
      console.log(error);
      response.status(500).json({
          errors :[{msg : error.message}]
      });
  }
});







module.exports = router;
