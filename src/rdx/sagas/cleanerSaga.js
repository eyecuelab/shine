import * as actions from '../actions';
import * as types from '../actions/types';
import {
  applyCleanerService,
  editCleanerService,
  deleteCleanerService,
} from '../services/cleanerService';
import { call, put, select } from 'redux-saga/effects';

export const getToken = (state) => state.users.data.data.attributes.token;
export const getUserID = (state) => state.users.cleaner.id;

export function* cleanerApplySaga(action) {
  try {
    const token = yield select(getToken);
    let response = yield call(applyCleanerService, action.payload, token);
    if (response.ok && response.status === 200) {
      const data = yield response.json();
      yield put(actions.postCleanerProfile(data));
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('CLEANER PROFILE ERROR: ', error);
    yield put({ type: types.ADD_CLEANER_ERROR, error: error.message });
  }
}

export function* editCleanerSaga(action) {
  try {
    const userID = yield select(getUserID);
    const token = yield select(getToken);
    let response = yield call(
      editCleanerService,
      action.payload,
      userID,
      token,
    );
    if (response.status >= 200 && response.status < 300) {
      const data = yield response.json();
      yield put(actions.updateCleanerProfile(data));
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('UPDATE CLEANER PROFILE ERROR: ', error);
    yield put({ type: types.UPDATE_CLEANER_ERROR, error: error.message });
  }
}

export function* deleteCleanerSaga() {
  try {
    const userID = yield select(getUserID);
    const token = yield select(getToken);
    let response = yield call(deleteCleanerService, userID, token);
    if (response.ok && response.status === 204) {
      yield put({ type: types.DELETE_CLEANER_SUCCESS });
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('DELETE CLEANER ERROR:', error);
  }
}
