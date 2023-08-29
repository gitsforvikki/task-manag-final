import React ,{useState , useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import * as taskActions from '../../redux/task/task.action';
import * as taskReducer from '../../redux/task/task.reducer';
import Spinner from '../../util/spinner/Spinner';


let UpdateTask = ()=>{

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let taskId = useParams().taskId;
  let taskInfo ={};

  //get data from the redux store
  taskInfo = useSelector((state)=>{
    return state[taskReducer.taskFeatresKey];
  });

  let {singleTask , loading} = taskInfo;

//on page mount
useEffect(()=>{
  dispatch(taskActions.getTask(taskId));
  setLocalTask({
    ...localTask,
    title : singleTask.title ? singleTask.title : "",
    description : singleTask.description ? singleTask.description : ""
  })
},[]);
 



  //local storage
   let [localTask , setLocalTask] = useState({
    title : "",
    description : ""
  });
  
  //updat form input
  let updateInput =(event)=>{
    setLocalTask({
      ...localTask,
      [event.target.name] : event.target.value
    })
  }

//form data submit
let ClickUpdateTask = (event)=>{
  event.preventDefault();
  dispatch(taskActions.updateTask(localTask ,taskId, navigate));
}




//react element
  return(
    <React.Fragment>
      {/* <pre>{JSON.stringify(singleTask)}</pre> */}
      <section className="p-3 wrapper text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">Update Your Task</p>
            </div>
          </div>
        </div>
      </section>

      {/* Update task form */}

      {
        loading ? <Spinner/> : 
        
        <React.Fragment>
            {
        Object.keys(singleTask).length > 0  ?

    <React.Fragment>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card cardForm">
                <div className="card-header wrapper text-white">
                    <h4 className="font-weight-bold">Update Task Here</h4>
                </div>
                <div className="card-body ">
                  <form onSubmit={ClickUpdateTask}>
                  <div className="form-group">
                      <input 
                      required
                      name="title"
                      value={localTask.title}
                      onChange={updateInput}
                       type="text"  className="form-control"  placeholder="Enter Title"/>
                    </div>
                    <div className="form-group">
                      <textarea 
                      required
                      name="description"
                      value={localTask.description}
                      onChange={updateInput}
                       type="text" rows="4" className="form-control"  placeholder="Enter Description"/>
                    </div>

                    <div>
                      <input type="submit" className="btn btn-dark btn-sm" value="Update"/>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
    : null
      }
        </React.Fragment>
      }
      
      
  </React.Fragment>
  )
}
export default UpdateTask;