import Axios from 'axios';
import * as userUtil from '../../util/UserUtil';
import * as authToken from '../../util/AuthUtil';

export const USER_REGISTER_REQUEST ="USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS ="USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE ="USER_REGISTER_FAILURE";


export const USER_LOGIN_REQUEST ="USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS ="USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE ="USER_LOGIN_FAILURE";


export const GET_USER_REQUEST ="GET_USER_REQUEST";
export const GET_USER_SUCCESS ="GET_USER_SUCCESS";
export const GET_USER_FAILURE ="GET_USER_FAILURE";


export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

//user register
export const userRegister=(user , navigate)=>{
  return async (dispatch)=>{
    try{
      dispatch({type  : USER_REGISTER_REQUEST});
      let dataUrl = '/api/users/register';
      let response = await Axios.post(dataUrl , user);
      dispatch({type : USER_REGISTER_SUCCESS , payload : response.data});
      navigate('/users/login');
    }
    catch(error){
      console.log(error);
      dispatch({type:USER_REGISTER_FAILURE  ,payload : { error : error}});
      
      
    }
  }
};


//login user
export const userLogin = (user , navigate)=>{
  return async (dispatch)=>{
    try{
      dispatch({type :USER_LOGIN_REQUEST});
      let dataUrl='/api/users/login';
      let response =  await Axios.post(dataUrl , user);
      dispatch({type : USER_LOGIN_SUCCESS , payload : response.data});
      // dispatch(getUser());
      navigate('/');

    }
    catch(error){
      console.log(error);
      dispatch({type : USER_LOGIN_FAILURE , payload : error});      
    }
  }
};

//get user 

export const getUser=()=>{
  return async (dispatch)=>{
    try{
      if(userUtil.isLoggedIn()){
        authToken.setAuthToken(userUtil.getToken());
        dispatch({type:GET_USER_REQUEST});
        let dataUrl='/api/users/me';
        let response =  await Axios.get(dataUrl);
        dispatch({type : GET_USER_SUCCESS , payload : response.data});
        
      }
    }
    catch(error){
      dispatch({type : GET_USER_FAILURE , payload:error});
    }
  }
};


//logout user
export const logoutUSer = (navigate)=>{
  return async (dispatch)=>{
   try{
      dispatch({type  : LOGOUT_USER_SUCCESS});
      navigate('/');
   }
   catch(error){
    dispatch({type : LOGOUT_USER_FAILURE})
   }
  }
}