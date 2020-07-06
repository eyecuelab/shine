import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authSaga';
import * as types from '../actions/types';

export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_WATCHER, loginSaga);
}
