import * as actions from '../actions';
import * as types from '../actions/types';
import {} from '../services/cleanerService';
import { call, put, cancelled } from 'redux-saga/effects';

export function* cleanerApplySaga(action) {
  console.log(action);
}
