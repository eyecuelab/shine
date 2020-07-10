import * as actions from '../actions';
import * as types from '../actions/types';
import { applyCleanerService } from '../services/cleanerService';
import { call, put, cancelled, select } from 'redux-saga/effects';

export const getToken = (state) => state.users.auth.token;

export function* cleanerApplySaga(action) {
  console.log(action);
  try {
    const token = yield select(getToken);
    let response = yield call(applyCleanerService, action.payload, token);
    const data = yield response.json();
    console.log(data);
    if (response.status >= 200 && response.status < 300) {
      console.log('DATA', data);
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('EDIT PROFILE ERROR: ', error);
  }
}
