import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate , Link} from "react-router-dom";
import * as userActions from "../../redux/user/user.action"

let UserLogin =()=>{


  let dispatch = useDispatch();
  let navigate = useNavigate();

//locale state
  let [user , setUser] = useState({
    email : "",
    password : ""
  })

  //apdate form input
  let updateInput = (event)=>{
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  }

  //submit form data

  let clickSubmitUser = (event)=>{
    event.preventDefault();
    dispatch(userActions.userLogin(user , navigate));
  }
  return(
    <React.Fragment>
      {/* <pre>{JSON.stringify(user)}</pre> */}
      <section className="p-3 wrapper text-white ">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">Please login to the portal</p>
            </div>
          </div>
        </div>
      </section>


       <section className="m-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header wrapper text-white">
                  <h3>Login Your Account</h3>
                </div>
                <div className="card-body bg-light">
                  <form onSubmit={clickSubmitUser}>
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
                      <small>Don't have an account? <Link to='/users/register' className="text-teal ">Register</Link> </small>
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
export default UserLogin;