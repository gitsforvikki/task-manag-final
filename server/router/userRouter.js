const express =  require('express');
const router = express.Router();
const bcryptjs = require('bcrypt');
const jwt = require('jsonwebtoken');
const {body , validationResult} = require('express-validator');
const User = require('../models/user');
const authenticate = require('../middlewares/authenticate');




//regitser user
router.post('/register',[
  body('name').notEmpty().withMessage('name requires'),
  body('email').notEmpty().withMessage('Email requires'),
  body('password').notEmpty().withMessage('Password requires')
], async(request , response)=>{
  let errors = validationResult(request);
  if(!errors.isEmpty()){
    return response.status(401).json({errors : errors.array()});
  }
  try{
    //get data fill by user
    let {name , email , password  } = request.body;

    //check user is already exist or not
    let user = await User.findOne({email : email});
    if(user){
      return  response.status(401).json({errors : [{msg : 'User already exist'}]});
    }

     //encode password
     let salt =  await bcryptjs.genSalt(10);
     password = await bcryptjs.hash(password , salt);
 
   //save user to database
   user = new User({name , email , password });
   user = await user.save();
   response.status(200).json({msg:'Registration success'});
 
   }
  catch(error){
    console.log(error);
    response.status(500).json({errors : [{msg : error.message}]});
  }
});


//user login
router.post('/login' , [
  body('email').notEmpty().withMessage('Email required'),
  body('password').notEmpty().withMessage('Password required')
],async( request ,  response)=>{
  //check is there any error or not
  let errors = validationResult(request);
  if(!errors.isEmpty()){
    return response.status(401).json({errors : errors.array()});
  }
  try{
    //geting form data
    let {email , password} = request.body;
    
    //get user data from database
    let user = await User.findOne({email : email});
    if(!user){
      return  response.status(401).json({errors : [{msg : 'User already exist'}]});
    }

    //check password is matched or not
    let isMatch = await bcryptjs.compare(password , user.password);
    if(!isMatch){
      return  response.status(401).json({errors : [{msg : 'Invalid credentials..'}]});
    }

    //create paylod with login credentials
    let payload = {
      user : {
        id:user.id,
        name : user.name
      }
    };

    jwt.sign(payload , process.env.JWT_SECRET_KEY , {expiresIn : 300000} , (error , token)=>{
      if(error) throw error;
      response.status(200).json({
        msg : "Login success",
        token : token
      })
    })
  }
  catch(error){
    console.log(error);
    response.status(500).json({errors : [{msg : error.message}]});
  }
  
} );


//get user
router.get('/me' ,authenticate, async (request , response) => {
  try {
      let user = await User.findById(request.user.id).select('-password');
      response.status(200).json({user : user});
  }
  catch (error) {
      console.error(error);
      response.status(500).json({errors : [{msg : error.message}]});
  }
});





module.exports = router;