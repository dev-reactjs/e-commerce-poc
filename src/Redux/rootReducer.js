import{ registrationReducer,loginReducer}   from './reducer'
import { combineReducers } from "redux";
export default combineReducers({
    registrationReducer,
    loginReducer,
 });