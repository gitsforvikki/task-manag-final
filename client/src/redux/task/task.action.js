import axios from 'axios';
import * as userUtil from '../../util/UserUtil';
import * as authUtil from '../../util/AuthUtil';
import * as alertActions from '../../redux/alert/alert.action';

export const TASK_UPLOAD_REQUEST ="TASK_UPLOAD_REQUEST";
export const TASK_UPLOAD_SUCCESS ="TASK_UPLOAD_SUCCESS";
export const TASK_UPLOAD_FAILURE ="TASK_UPLOAD_FAILURE";


export const GET_TASK_REQUEST ="GET_TASK_REQUEST";
export const GET_TASK_SUCCESS ="GET_TASK_SUCCESS";
export const GET_TASK_FAILURE ="GET_TASK_FAILURE";

export const GET_ALL_TASK_REQUEST ="GET_ALL_TASK_REQUEST";
export const GET_ALL_TASK_SUCCESS ="GET_ALL_TASK_SUCCESS";
export const GET_ALL_TASK_FAILURE ="GET_ALL_TASK_FAILURE";


export const DELETE_TASK_REQUEST ="DELETE_TASK_REQUEST";
export const DELETE_TASK_SUCCESS ="DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE ="DELETE_TASK_FAILURE";


export const UPDATE_TASK_REQUEST ="UPDATE_TASK_REQUEST";
export const UPDATE_TASK_SUCCESS ="UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_FAILURE ="UPDATE_TASK_FAILURE";




export const CHANGE_COMPLETE_STATUS_REQUEST = "CHANGE_COMPLETE_STATUS_REQUEST";
export const CHANGE_COMPLETE_STATUS_SUCCESS = "CHANGE_COMPLETE_STATUS_SUCCESS";
export const CHANGE_COMPLETE_STATUS_FAILURE = "CHANGE_COMPLETE_STATUS_FAILURE";




//CREATE TASK OR UPLOAD TASK
export const uploadTask =(task , navigate)=>{
  return async (dispatch)=>{
    try{
      if(userUtil.isLoggedIn()){
        authUtil.setAuthToken(userUtil.getToken());
        dispatch({type : TASK_UPLOAD_REQUEST});
        let dataUrl = '/api/tasks/upload';
        let response = await axios.post(dataUrl, task);
        dispatch({type : TASK_UPLOAD_SUCCESS , payload : response.data});
        dispatch(alertActions.setAlert(response.data.msg , 'success'));

        navigate('/tasks/all-tasks');
      }
    }
    catch(error){
      console.log(error);
      dispatch({type : TASK_UPLOAD_FAILURE , payload:{error : error}});
      let errorList = error.response.data.errors;
      for(let error of errorList){
        dispatch(alertActions.setAlert(error.msg , 'danger'));
      } 
    }
  }
}




//get all task

export const getALlTasks =()=>{
  return async (dispatch)=>{
    try{
      if(userUtil.isLoggedIn()){
        authUtil.setAuthToken(userUtil.getToken());
        dispatch({type : GET_ALL_TASK_REQUEST});
        let dataUrl ='/api/tasks/all-tasks';
        let response = await axios.get(dataUrl);
        dispatch({type:GET_ALL_TASK_SUCCESS , payload : response.data});
        
      }
    }
    catch(error){
      console.log(error);
      dispatch({type : GET_ALL_TASK_FAILURE , payload : {error : error}});
    }
  }
}


//get single task 

export const getTask=(taskId)=>{
  return async (dispatch)=>{
    try{
      if(userUtil.isLoggedIn()){
        authUtil.setAuthToken(userUtil.getToken());
        dispatch({type : GET_TASK_REQUEST});
        let dataUrl =`/api/tasks/${taskId}`;
        let response = await axios.get(dataUrl);
        dispatch({type : GET_TASK_SUCCESS , payload:response.data});
      }
    }
    catch(error){
      console.log(error);
      dispatch({type : GET_TASK_FAILURE , payload:{error : error}});
    }
  }
}




//delete task
export const deleteTask =(taskId)=>{
  return async (dispatch)=>{
    try{
      if(userUtil.isLoggedIn()){
        authUtil.setAuthToken(userUtil.getToken());
        dispatch({type:DELETE_TASK_REQUEST});
        let dataUrl = `/api/tasks/${taskId}`
        let response = await axios.delete(dataUrl);
        dispatch({type : DELETE_TASK_SUCCESS , payload : response.data});
        dispatch(alertActions.setAlert(response.data.msg , 'success'));
      }
    }
    catch(error){
      console.log(error);
      dispatch({type : DELETE_TASK_FAILURE , payload:{error : error}});
      let errorList = error.response.data.errors;
      for(let error of errorList){
        dispatch(alertActions.setAlert(error.msg , 'danger'));
      } 
    }
  }
}


//update task
export const updateTask =(task ,taskId ,  navigate)=>{
  return async (dispatch)=>{
    try{
      if(userUtil.isLoggedIn()){
        authUtil.setAuthToken(userUtil.getToken());
        dispatch({type : UPDATE_TASK_REQUEST});
        let dataUrl = `/api/tasks/update/${taskId}`;
        let response = await axios.put(dataUrl ,task );
        dispatch({type : UPDATE_TASK_SUCCESS , payload :response.data});
        dispatch(alertActions.setAlert(response.data.msg , 'success'));
        navigate('/tasks/all-tasks');
      }
    }
    catch(error){
      console.log(error);
      dispatch({type : UPDATE_TASK_FAILURE , payload : {error : error}});
      let errorList = error.response.data.errors;
      for(let error of errorList){
        dispatch(alertActions.setAlert(error.msg , 'danger'));
      } 
    }
  }
}


//iscomplete status update
  export const updateIsComplete = (taskId)=>{
    return async (dispatch)=>{
     try{
        if(userUtil.isLoggedIn()){
          authUtil.setAuthToken(userUtil.getToken());
          dispatch({type : CHANGE_COMPLETE_STATUS_REQUEST});
          let dataUrl =`/api/tasks/update/status/${taskId}`;
          let response = await axios.put(dataUrl , taskId);
          dispatch({type:CHANGE_COMPLETE_STATUS_SUCCESS , payload :  response.data});
        }
        
     }
     catch(error){
      console.log(error);
     }
    }
  }
