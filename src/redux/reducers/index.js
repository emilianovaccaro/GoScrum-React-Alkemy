import { combineReducers } from "redux";
import { taskReducer } from './taskReducer';
import { authReducer } from './authReducer';

export default combineReducers({
  tasks: taskReducer,
});