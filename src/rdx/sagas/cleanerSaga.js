import * as actions from '../actions';
import * as types from '../actions/types';
import {
  applyCleanerService,
  editCleanerService,
  deleteCleanerService,
  loadQuotableOrdersService,
  postQuoteService,
} from '../services/cleanerService';
import { call, put, select } from 'redux-saga/effects';

export const getToken = (state) => state.users.data.data.attributes.token;
export const getCleanerID = (state) => state.cleaner.data.id;

export function* cleanerApplySaga(action) {
  try {
    const token = yield select(getToken);
    let response = yield call(applyCleanerService, action.payload, token);
    if (response.ok && response.status === 200) {
      const data = yield response.json();
      yield put(actions.postCleanerProfile(data.data));
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
    const cleanerID = yield select(getCleanerID);
    const token = yield select(getToken);
    let response = yield call(
      editCleanerService,
      action.payload,
      cleanerID,
      token,
    );
    if (response.status >= 200 && response.status < 300) {
      const data = yield response.json();
      yield put(actions.updateCleanerProfile(data.data));
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
    const cleanerID = yield select(getCleanerID);
    const token = yield select(getToken);
    let response = yield call(deleteCleanerService, cleanerID, token);
    if (response.ok && response.status === 204) {
      yield put({ type: types.DELETE_CLEANER_SUCCESS });
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('DELETE CLEANER ERROR:', error);
  }
}

export function* loadQuotableOrdersSaga() {
  try {
    const cleanerID = yield select(getCleanerID);
    const token = yield select(getToken);
    let response = yield call(loadQuotableOrdersService, cleanerID, token);
    if (response.ok && response.status === 200) {
      const data = yield response.json();
      yield put(actions.setQuotableOrders(data.data));
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('LOAD QUOTABLE ORDERS ERROR:', error);
  }
}

export function* postQuoteSaga(action) {
  try {
    const cleanerID = yield select(getCleanerID);
    const orderID = action.payload.orderID;
    const token = yield select(getToken);
    let response = yield call(
      postQuoteService,
      action.payload,
      cleanerID,
      token,
    );
    if (response.ok && response.status === 204) {
      yield put(actions.postQuote(orderID));
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('POST QUOTE ERROR:', error);
    yield put({ type: types.POST_QUOTE_ERROR, error: error.message });
  }
}
