import * as actions from '../actions';
import * as types from '../actions/types';
import {
  applyCleanerService,
  editCleanerService,
  deleteCleanerService,
  loadQuotableOrdersService,
  postQuoteService,
  loadQuotedOrdersService,
  updateOrderService,
  loadCompletedOrdersService,
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
      yield put(actions.postQuote({ orderID: orderID, cleanerID: cleanerID }));
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('POST QUOTE ERROR:', error);
    yield put({ type: types.POST_QUOTE_ERROR, error: error.message });
  }
}

export function* loadQuotedOrdersSaga() {
  try {
    const cleanerID = yield select(getCleanerID);
    const token = yield select(getToken);
    let response = yield call(loadQuotedOrdersService, cleanerID, token);
    if (response.ok && response.status === 200) {
      const data = yield response.json();
      yield put(actions.setQuotedOrders(data.data));
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('LOAD QUOTED ORDERS ERROR:', error);
  }
}

export function* updateOrderByCleanerSaga(action) {
  try {
    const cleanerID = yield select(getCleanerID);
    const token = yield select(getToken);
    let response = yield call(
      updateOrderService,
      action.payload,
      cleanerID,
      token,
    );
    if (response.ok && response.status === 200) {
      const data = yield response.json();
      console.log('SAGA', data);
      const orderID = data.data.id;
      const status = {
        [data.meta.actions[1][0][0]]: data.meta.actions[1][0][2],
        [data.meta.actions[1][1][0]]: data.meta.actions[1][1][2],
        [data.meta.actions[1][2][0]]: data.meta.actions[1][2][2],
        [data.meta.actions[1][3][0]]: data.meta.actions[1][3][2],
        [data.meta.actions[1][4][0]]: data.meta.actions[1][4][2],
      };
      yield put(actions.setUpdatedOrder({ orderID, status }));
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('UPDATE ORDER ERROR:', error);
  }
}

export function* loadCompletedOrdersSaga() {
  try {
    const cleanerID = yield select(getCleanerID);
    const token = yield select(getToken);
    let response = yield call(loadCompletedOrdersService, cleanerID, token);
    if (response.ok && response.status === 200) {
      const data = yield response.json();
      // console.log('SAGA', data);
      yield put(actions.setCompletedOrders(data.data));
    } else {
      throw yield response.json();
    }
  } catch (error) {
    console.log('LOAD QUOTABLE ORDERS ERROR:', error);
  }
}
