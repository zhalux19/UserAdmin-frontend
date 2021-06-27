
import { call, put, takeLeading} from 'redux-saga/effects'
import * as userApi from "../../api/userApi";
import * as actionTypes from "../actionTypes";
import {fetchUsersSuccess, fetchUsersError} from "../actions"
 
function* fetchUsers() {
    try {
       const users = yield call(userApi.getUsers);
       yield put(fetchUsersSuccess(users));
    } catch (e) {
       yield put(fetchUsersError());
    }
 }
 
export function* fetchUsersWatchSaga(){
    yield takeLeading(actionTypes.BEGIN_FETCH_USERS, fetchUsers);
}
