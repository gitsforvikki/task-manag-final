import { combineReducers } from "redux";
import * as userReducer from './user/user.reducer';
import * as taskReducer from "./task/task.reducer"
export const rootReducer = combineReducers({
    [userReducer.userFeatresKey]  : userReducer.reducer,
    [taskReducer.taskFeatresKey] : taskReducer.reducer
});