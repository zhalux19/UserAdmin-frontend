import apiStatus from "../../utilities/apiStatus";
import * as types from "../actionTypes";
import initialState from "../initialState";

const userCreationPageReducer = (state = initialState.user, action) => {
    switch(action.type){
        case types.BEGIN_FETCH_USERS:
            return {...state, fetchUsersApiStatus: apiStatus.LOADING, users: []};
        case types.FETCH_USERS_SUCCESS:
            return {...state, fetchUsersApiStatus: apiStatus.SUCCEEDED, users: action.users};
        case types.FETCH_USERS_ERROR:
            return {...state, fetchUsersApiStatus: apiStatus.FAILED, users: []};
        default:
            return state;
    }
}

export default userCreationPageReducer;