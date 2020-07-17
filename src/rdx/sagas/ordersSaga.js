import { takeEvery, put, call, select, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import {
  fetchOrders,
  postOrder,
  publishOrder,
} from '../services/ordersService';
import {
  setOrders,
  setError,
  reloadOrders,
  setPostError,
  setPublishedOrder,
  setPublishError,
} from '../actions';

export const getToken = (state) => state.users.data.data.attributes.token;

export function* handleOrdersLoad() {
  try {
    const token = yield select(getToken);
    const orders = yield call(fetchOrders, token);
    yield put(setOrders(orders));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* postOrderSaga(action) {
  try {
    const token = yield select(getToken);
    const result = yield call(postOrder, action.payload, token);
    yield put(reloadOrders(result));
  } catch (error) {
    yield put(setPostError(error.toString()));
  }
}

export function* publishOrderSaga(action) {
  try {
    const token = yield select(getToken);
    const result = yield call(publishOrder, action.payload, token);
    console.log('SAGA', result);
    yield put(setPublishedOrder(result));
  } catch (error) {
    yield put(setPublishError(error.toString()));
  }
}

export default function* watchOrdersLoad() {
  yield takeEvery(types.LOAD_ORDERS, handleOrdersLoad);
}

export function* watchPostOrder() {
  yield takeEvery(types.POST_ORDER, postOrderSaga);
}

export function* watchOrdersReload() {
  yield takeEvery(types.POST_ORDER_SUCCESS, handleOrdersLoad);
}

export function* watchPublishOrder() {
  yield takeLatest(types.PUBLISH_ORDER_WATCHER, publishOrderSaga);
}
