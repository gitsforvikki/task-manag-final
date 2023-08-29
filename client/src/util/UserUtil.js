export const isLoggedIn = ()=>{
  return localStorage.getItem('task-token') ? true : false
};

export const getToken=()=>{
  return localStorage.getItem('task-token');
};