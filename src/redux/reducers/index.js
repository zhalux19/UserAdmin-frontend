import user from "./userReducer";
import userCreationPage from "./userCreationPageReducer";
import { combineReducers } from "redux";

export default combineReducers({
    user,
    userCreationPage
})