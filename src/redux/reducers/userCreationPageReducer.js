import apiStatus from "../../utilities/apiStatus";
import * as types from "../actionTypes";
import initialState from "../initialState";

const userCreationPageReducer = (state = initialState.createUserPage, action) => {
    switch(action.type){
        case types.BEGIN_CREATE_USER:
            return {...state, createUserApiStatus: apiStatus.LOADING};
        case types.CREATE_USER_SUCCESS:
            return {...state, createUserApiStatus: apiStatus.SUCCEEDED};
        case types.CREATE_USER_ERROR:
            return {...state, createUserApiStatus: apiStatus.FAILED};
        case types.CREATE_USER_PAGE_CLEAN_UP:
            return initialState.createUserPage;
        default:
            return state;
    }
}

export default userCreationPageReducer;