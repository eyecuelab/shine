import { takeLatest } from 'redux-saga/effects';
import { loginSaga, logoutSaga, signupSaga, editProfileSaga } from './authSaga';
import * as types from '../actions/types';

export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_WATCHER, loginSaga);
  yield takeLatest(types.LOGOUT_WATCHER, logoutSaga);
  yield takeLatest(types.SIGNUP_WATCHER, signupSaga);
  yield takeLatest(types.EDIT_PROFILE_WATCHER, editProfileSaga);
}
