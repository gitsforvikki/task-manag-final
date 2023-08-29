import React ,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import * as taskActions from '../../redux/task/task.action';

let UpdateTask = ()=>{

  let dispatch = useDispatch();
  let navigate = useNavigate();

  //local storage
  let [task , setTask] = useState({
    title : "",
    description : ""
  });

  //updat form input
  let updateInput =(event)=>{
    setTask({
      ...task,
      [event.target.name] : event.target.value
    })
  }

//form data submit
let ClickCreateTask = (event)=>{
  event.preventDefault();
  dispatch(taskActions.uploadTask(task , navigate));
}
  return(
    <React.Fragment>
      {/* <pre>{JSON.stringify(task)}</pre> */}
      <section className="p-3 wrapper text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">You can create you task here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Update task form */}
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header wrapper text-white">
                    <h4 className="font-weight-bold">Create Your Task Here</h4>
                </div>
                <div className="card-body bg-light">
                  <form onSubmit={ClickCreateTask}>
                  <div className="form-group">
                      <input 
                      name="title"
                      value={task.title}
                      onChange={updateInput}
                       type="text" required className="form-control"  placeholder="Enter Title"/>
                    </div>
                    <div className="form-group">
                      <textarea 
                      name="description"
                      value={task.description}
                      onChange={updateInput}
                       type="text" rows="4" required className="form-control"  placeholder="Enter Description"/>
                    </div>

                    <div>
                      <input type="submit" className="btn btn-dark btn-sm" value="Create"/>
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
export default UpdateTask;