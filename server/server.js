const express = require('express');
const cors = require('cors');
const dotEnv =  require('dotenv');
const mongoose = require('mongoose');


//initialize express
const app = express();

//config cors
dotEnv.config();

//config cors
app.use(cors());


//allow express to handle with json file
app.use(express.json());

//port number
const port = process.env.PORT || 5000;

//connect mongoose database
mongoose.connect(process.env.MONGO_DB_CLOUD_URL).then((respose)=>{
  console.log("mongoose database connect succesfully.......");
}).catch((error)=>{
  console.log(error);
  process.exit(1);
});


//config router
app.use('/api/users' , require('./router/userRouter'));
app.use('/api/tasks' , require('./router/taskRouter'));



//simple request
app.get('/',(request , response)=>{
  response.send(`<h2>welcome to download Admit cart...</h2>`)
});


app.listen(port,()=>{
  console.log(`Express server is started at port:${port}`);
});
