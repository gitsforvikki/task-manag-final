import React , {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux';
import * as taskActions from '../../redux/task/task.action';
import * as taskReducer from '../../redux/task/task.reducer';
import Spinner from '../../util/spinner/Spinner';
let Tasks = ()=>{

  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(taskActions.getALlTasks());
  } ,[]);


  //getting task data from store
  let taskInfo = useSelector((state)=>{
    return state[taskReducer.taskFeatresKey];
  });

  let {tasks , loading} = taskInfo;

  let clickDeleteTask = (taskId)=>{
    
    dispatch(taskActions.deleteTask(taskId));
  }


let checkIsComplete=(taskId)=>{

  dispatch(taskActions.updateIsComplete(taskId));
}


  
  return(
    <React.Fragment>

      {/* <pre>{JSON.stringify(tasks)}</pre> */}

       <section className="p-3 wrapper text-white ">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">Your Tasks Are...</p>
            </div>
          </div>
        </div>
      </section>

      {
        loading ? <Spinner/> :
        <React.Fragment>
          {
            tasks.length > 0 ?
              
            <React.Fragment>
              {
                tasks.map((eachTask)=>{
                  return(
                    <section className="pt-3" key={eachTask._id}>
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <div className="card">
                              <div className="card-header wrapper text-white">
                                  <h4 className="font-weight-bold">{" "}</h4>
                                  <div className="form-check">
                                  <input className="form-check-input" onChange={checkIsComplete.bind(this , eachTask._id)} type="checkbox" value="" />
                                    
                                  <label className="form-check-label" > 
                                    {
                                      (eachTask.isComplete === true)
                                      ? <div> Mark as Incomplete </div> 
                                      : <div> Mark is complete </div> 
                                    }
                                    </label>
                                  </div>
                              </div>

                              <div className={`card-body ${eachTask.isComplete ? 'bg-complete' : 'bg-incomplete'} `}>
                                <h5 className="font-weight-bold">{eachTask.title}</h5>
                                <p className='lead'>{eachTask.description}</p>
                                    <Link to={`/tasks/update/${eachTask._id}`}  className="btn bg-secondary text-white btn-sm">Update</Link>
                                    <button onClick={clickDeleteTask.bind(this , eachTask._id)} className="btn btn-info btn-sm" >Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                     </section>
                  )
                })
              }
            </React.Fragment> :  
            
            <React.Fragment>
              <section className="p-5">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <p className="h3"> <span className="display-4">Sorry{" "}</span>You don't have any task. Please create one.</p>
                      <Link  to="/tasks/create" className="btn btn-secondary btn-sm">Create</Link>
                    </div>
                  </div>
                </div>
              </section>
            </React.Fragment>
          }
        </React.Fragment>
      }
      <div style={{marginBottom:'150px'}}></div>
    </React.Fragment>
  )
}

export default Tasks;



