import * as actions from '../actions';
import * as types from '../actions/types';
import { applyCleanerService } from '../services/cleanerService';
import { call, put, cancelled } from 'redux-saga/effects';

export function* cleanerApplySaga(action) {
  console.log(action);
  let response = yield call(applyCleanerService, action.payload);
  console.log('RESPONSE', response.json());
}
