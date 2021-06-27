
import { call, put, takeLeading} from 'redux-saga/effects'
import * as userApi from "../../api/userApi";
import * as actionTypes from "../actionTypes";
import {createUserSuccess, createUserError} from "../actions"
 
function* createUser({firstName, lastName, email, isMale, status}) {
    try {
       yield call(userApi.createUser, {firstName, lastName, email, isMale, status});
       yield put(createUserSuccess());
    } catch (e) {
       yield put(createUserError());
    }
}
 
export function* createUserWatchSaga(){
    yield takeLeading(actionTypes.BEGIN_CREATE_USER, createUser);
}