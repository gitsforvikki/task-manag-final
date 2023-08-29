import React ,{useEffect}from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './layout/Home';
import Navbar from './layout/Navbar';
import UserRegister from './models/user/UserRegister';
import UserLogin from './models/user/UserLogin';
import Tasks from './models/task/Tasks';
import UpdateTask from './models/task/UpdateTask';
import CreateTask from './models/task/CreateTask';
import  PrivateRoute  from './util/PrivateRoute';
import * as userAction from './redux/user/user.action';
import Alert from './util/alert/Alert';

let App = ()=>{
  
  let dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(userAction.getUser());
  },[]);

  
  return(
    <React.Fragment>
      <Router>
      <Navbar/>
      <Alert/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users/register' element={<UserRegister/>} />
        <Route path='/users/login' element={<UserLogin/>} />
        <Route path='/tasks/all-tasks' element={<PrivateRoute><Tasks/></PrivateRoute>} />
        <Route path='/tasks/update/:taskId' element={<PrivateRoute><UpdateTask/></PrivateRoute>} />
        <Route path='/tasks/create' element={<PrivateRoute><CreateTask/></PrivateRoute>} />
      </Routes>
     </Router>
    </React.Fragment>
  )
}

export default App;
