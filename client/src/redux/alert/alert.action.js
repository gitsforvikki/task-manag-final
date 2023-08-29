import { v4 as uuidv4 } from 'uuid';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT='REMOVE_ALERT';


export const setAlert=(message , color)=>{
  return async (disapcth)=>{
    try{
        let id = uuidv4();
        disapcth({type : SET_ALERT , payload:{message , color , id}});
        setTimeout(()=>{
          disapcth({type : REMOVE_ALERT , payload :{id} });
        } , 3000);
    }
    catch(error){
      console.log(error);
    }
  }
}