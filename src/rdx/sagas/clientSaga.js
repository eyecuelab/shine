import * as actions from '../actions';
import * as types from '../actions/types';
import {
  editProfileService,
  getProfileService,
} from '../services/clientService';
import { call, put, cancelled } from 'redux-saga/effects';

export function* editProfileSaga(action) {
  console.log('PAYLOAD', action.payload);
  try {
    let response = yield call(editProfileService, action.payload);
    console.log('PATCH RESPONSE', response.json());
    if (response.status >= 200 && response.status < 300) {
      yield put(actions.updateProfile());
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('EDIT PROFILE ERROR: ', error);
  }
}

export const getToken = (state) => state.users.auth.token;

export function* getProfileSaga() {
  const token = yield select(getToken);
  let response = yield call(editProfileService, token);
  console.log('GET RESPONSE', response.json());
}
