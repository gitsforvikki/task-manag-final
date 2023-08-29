import * as taskActions from './task.action';


export const taskFeatresKey = 'taskInfo';


let initialState={
  loading :false,
  singleTask:{},
  tasks:[],
  isComplte:false,
  errorMessage:''
};


export const reducer =(state  = initialState , actions)=>{
let {type , payload} = actions;

switch(type){
  //upload tasks
  case taskActions.TASK_UPLOAD_REQUEST:
    return {
      ...state,
      loading : true
    };
  case taskActions.TASK_UPLOAD_SUCCESS:
    return{
      ...state,
      loading : false,
      tasks : [payload.task , ...state.tasks]
    };
  case taskActions.TASK_UPLOAD_FAILURE:
    return{
      ...state,
      loading :false,
      errorMessage:payload.error
    };
    
    //get all tasks
    case taskActions.GET_ALL_TASK_REQUEST:
    return {
      ...state,
      loading : true
    };
  case taskActions.GET_ALL_TASK_SUCCESS:
    return{
      ...state,
      loading : false,
      tasks : [...payload.tasks]
    };
  case taskActions.GET_ALL_TASK_FAILURE:
    return{
      ...state,
      loading :false,
      tasks:[],
      errorMessage:payload.error
    };


    //get single task
    case taskActions.GET_TASK_REQUEST:
    return {
      ...state,
      loading : true
    };
  case taskActions.GET_TASK_SUCCESS:
    return{
      ...state,
      loading : false,
      singleTask : payload.task
    };
  case taskActions.GET_TASK_FAILURE:
    return{
      ...state,
      loading :false,
      singleTask:{},
      errorMessage:payload.error
    };

    //delete task
    case taskActions.DELETE_TASK_REQUEST:
    return {
      ...state,
      loading : true
    };
  case taskActions.DELETE_TASK_SUCCESS:
    return{
      ...state,
      loading : false,
      tasks: state.tasks.filter(task => task._id !== payload.task._id),
    };
  case taskActions.DELETE_TASK_FAILURE:
    return{
      ...state,
      loading :false,
      task:[...state.tasks],
      errorMessage:payload.error
    };

    //updatea task
    case taskActions.UPDATE_TASK_REQUEST:
    return {
      ...state,
      loading : true
    };
  case taskActions.UPDATE_TASK_SUCCESS:
  //  let desireIndex  =  state.tasks.findIndex((task)=>task._id === payload.task._id)
  //  state.tasks[desireIndex] = payload.task
    return{
      ...state,
      loading : false,
      singleTask : payload.task,
      tasks: state.tasks.filter(task => task._id !== payload.task._id )  
    };
  case taskActions.UPDATE_TASK_FAILURE:
    return{
      ...state,
      loading :false,
      errorMessage:payload.error
    };

    //update status
    case taskActions.CHANGE_COMPLETE_STATUS_REQUEST:
    return {
      ...state,
      loading : true
    };
  case taskActions.CHANGE_COMPLETE_STATUS_SUCCESS:
     let desireIndex  =  state.tasks.findIndex((task)=>task._id === payload.task._id)
    state.tasks[desireIndex] = payload.task
    return{
      ...state,
      loading : false
    };
  case taskActions.CHANGE_COMPLETE_STATUS_FAILURE:
    return{
      ...state,
      loading :false,
      errorMessage:payload.error
    };
    
    


    default: return state;
}
}


