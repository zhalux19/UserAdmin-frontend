import * as types from "./actionTypes"

export const beginFetchUsers = ()=>{
    return {
        type: types.BEGIN_FETCH_USERS
    }
}

export const fetchUsersSuccess = (users)=>{
    return{
        type: types.FETCH_USERS_SUCCESS,
        users
    }
}

export const fetchUsersError = ()=>{
    return{
        type: types.FETCH_USERS_ERROR,
    }
}

export const beginCreateUser = (firstName, lastName, email, isMale, status) =>{
    return{
        type: types.BEGIN_CREATE_USER,
        firstName, lastName, email, isMale, status
    }
}

export const createUserSuccess = () =>{
    return{
        type: types.CREATE_USER_SUCCESS,
    }
}

export const createUserError = () =>{
    return{
        type: types.CREATE_USER_ERROR,
    }
}

export const createUserPageCleanUp = ()=>{
    return {
        type: types.CREATE_USER_PAGE_CLEAN_UP
    }
}
