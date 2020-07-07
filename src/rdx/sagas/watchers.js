import { takeLatest } from 'redux-saga/effects';
import { loginSaga, logoutSaga } from './authSaga';
import * as types from '../actions/types';

export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_WATCHER, loginSaga);
  yield takeLatest(types.LOGOUT_WATCHER, logoutSaga);
}
