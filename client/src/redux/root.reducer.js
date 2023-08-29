import { combineReducers } from "redux";
import * as userReducer from './user/user.reducer';
import * as taskReducer from "./task/task.reducer"
import * as alertReducer from './alert/alert.reducer';
export const rootReducer = combineReducers({
    [userReducer.userFeatresKey]  : userReducer.reducer,
    [taskReducer.taskFeatresKey] : taskReducer.reducer,
    [alertReducer.alertFeatureskey]  :alertReducer.reducer
});






