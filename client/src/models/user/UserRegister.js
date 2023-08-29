import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link ,  useNavigate } from "react-router-dom";
import *  as userActions from '../../redux/user/user.action';

let UserRegister =()=>{

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [user , setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  //update inpute
  let updateInput = (event)=>{
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  }

  //click submit button
  let clickSubmitUser = (event)=>{
    event.preventDefault();
    dispatch(userActions.userRegister(user , navigate));

  }
  return(
    <React.Fragment>
      {/* <pre>{JSON.stringify(user)}</pre> */}
      <section className=" wrapper text-white p-3  ">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">Welcome </p>
            </div>
          </div>
        </div>
      </section>

      <section className="  m-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header wrapper text-white">
                  <h3>Register Here</h3>
                </div>
                <div className="card-body bg-light">
                  <form onSubmit={clickSubmitUser}>
                    
                    <div className="form-group">
                      <input 
                      name="name"
                      value={user.name}
                      onChange={updateInput}
                      type="text" required className="form-control"  placeholder="Enter Name"/>
                    </div>

                    
                    <div className="form-group">
                      <input 
                      name="email"
                      value={user.email}
                      onChange={updateInput}
                      type="email" required className="form-control"  placeholder="Enter Email"/>
                    </div>

                    <div className="form-group">
                      <input 
                      name="password"
                      value={user.password}
                      onChange={updateInput}
                      type="password" required className="form-control"  placeholder="Enter Password"/>
                    </div>
                    
                    <div >
                      <input type="submit" className="btn btn-dark text-brown btn-sm btn-block" value="submit" />
                      <small>Already have a account? <Link to='/users/login' className="text-teal ">Login</Link> </small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default UserRegister;