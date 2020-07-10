import { takeLatest } from 'redux-saga/effects';
import { loginSaga, logoutSaga, signupSaga } from './authSaga';
import { editProfileSaga } from './clientSaga';
import { cleanerApplySaga } from './cleanerSaga';
import * as types from '../actions/types';

export function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_WATCHER, loginSaga);
  yield takeLatest(types.LOGOUT_WATCHER, logoutSaga);
  yield takeLatest(types.SIGNUP_WATCHER, signupSaga);
  yield takeLatest(types.EDIT_PROFILE_WATCHER, editProfileSaga);
}

export function* watchCleanerActions() {
  yield takeLatest(types.APPLY_CLEANER_WATCHER, cleanerApplySaga);
}
