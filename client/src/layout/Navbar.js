import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import * as userUtil from '../util/UserUtil'
import * as userReducer from '../redux/user/user.reducer';
import * as userAction from '../redux/user/user.action';

let Navbar = ()=>{

  let dispatch = useDispatch();
  let userInfo = useSelector((state)=>{
    return state[userReducer.userFeatresKey];
  });

  let clickLogout=()=>{
    dispatch(userAction.logoutUSer());
  }
  

  let beforeLogin =(
    <React.Fragment>
      <li className="nav-item">
          <Link  to="/users/register" className="nav-link"  >
            <i className="fa fa-user-shield" /> Register
          </Link>
      </li>
      <li className="nav-item">
        <Link  to="/users/login" className="nav-link"  >
        <i className="fa fa-sign-in-alt " /> Login
        </Link>
      </li>
    </React.Fragment>
  );

  //After login
  let afterLogin = (
    <React.Fragment>
                <li className="nav-item">
                  <Link to="/tasks/all-tasks" className="nav-link" >Your Tasks</Link>
                </li>

                <li className="nav-item">
                  <Link to="/tasks/create" className="nav-link" >Create</Link>
                </li>
                  <li className="nav-item ml-auto">
                    <Link  to="/" onClick={clickLogout} className="nav-link"  >
                     <i className="fa fa-sign-out-alt " /> Logout
                    </Link>
                  </li>
    </React.Fragment>
  );

  return(
    <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
          <div className="container">
            <Link to='/' className="navbar-brand"> Task Management App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                
                {
                  userUtil.getToken() && afterLogin
                }
                
              </ul>

              <ul className="navbar-nav ml-auto">
               {
                    userUtil.getToken() ? ""  : beforeLogin
                   // userUtil.getToken()  beforeLogin
               }
              </ul>
            </div>
          </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar;