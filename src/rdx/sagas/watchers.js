import { takeLatest } from 'redux-saga/effects';
import {
  loginSaga,
  logoutSaga,
  signupSaga,
  editProfileSaga,
  getProfileSaga,
} from './authSaga';
import { cleanerApplySaga } from './cleanerSaga';
import * as types from '../actions/types';

export function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_WATCHER, loginSaga);
  yield takeLatest(types.LOGOUT_WATCHER, logoutSaga);
  yield takeLatest(types.SIGNUP_WATCHER, signupSaga);
  yield takeLatest(types.EDIT_PROFILE_WATCHER, editProfileSaga);
  // yield takeLatest(types.GET_PROFILE_WATCHER, getProfileSaga);
}

export function* watchCleanerActions() {
  yield takeLatest(types.APPLY_CLEANER_WATCHER, cleanerApplySaga);
}
