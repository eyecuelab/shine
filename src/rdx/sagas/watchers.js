import { takeLatest } from 'redux-saga/effects';
import { loginSaga, logoutSaga, signupSaga, editProfileSaga } from './authSaga';
import {
  cleanerApplySaga,
  editCleanerSaga,
  deleteCleanerSaga,
  loadQuotableOrdersSaga,
  postQuoteSaga,
} from './cleanerSaga';
import * as types from '../actions/types';

export function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_WATCHER, loginSaga);
  yield takeLatest(types.LOGOUT_WATCHER, logoutSaga);
  yield takeLatest(types.SIGNUP_WATCHER, signupSaga);
  yield takeLatest(types.EDIT_PROFILE_WATCHER, editProfileSaga);
}

export function* watchCleanerActions() {
  yield takeLatest(types.APPLY_CLEANER_WATCHER, cleanerApplySaga);
  yield takeLatest(types.EDIT_CLEANER_WATCHER, editCleanerSaga);
  yield takeLatest(types.DELETE_CLEANER_WATCHER, deleteCleanerSaga);
  yield takeLatest(types.LOAD_QUOTABLE_ORDERS_WATCHER, loadQuotableOrdersSaga);
  yield takeLatest(types.ADD_QUOTE_WATCHER, postQuoteSaga);
}
