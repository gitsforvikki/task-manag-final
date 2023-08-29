import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import * as  alertReducer from '../../redux/alert/alert.reducer';

let Alert = ()=>{

  let alertInfo  = useSelector((state)=>{
      return state[alertReducer.alertFeatureskey];
  });

  let {messages} = alertInfo;
  return(
    <React.Fragment>
        {
          messages.length > 0 ? 
          <React.Fragment>
            <div className={`alert alert-${messages[0].color}  alert-dismissible m-2 fixed-top animated slideInDown`}>
            <button className="close"><i className="fa fa-times-circle"/></button>
            {
              messages.map(alert =>{
                  return(
                    <div key={alert.id}>
                       <small className="font-weight-bold">{alert.message}</small><br/>
                    </div>
                  )
              })
            }
            </div>
          </React.Fragment> : ' '
          
        }
    </React.Fragment>
  )
}
export default Alert;