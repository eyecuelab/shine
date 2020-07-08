import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as types from '../actions/types';
import { fetchOrders, postOrder } from '../api';
import { setOrders, setError, loadOrders, setPostError } from '../actions';

export const getToken = (state) => state.users.auth.token;

export function* handleOrdersLoad() {
  console.log('HIT ORDERLOAD');
  try {
    const token = yield select(getToken);
    const orders = yield call(fetchOrders, token);
    console.log('ORDERS', orders);
    yield put(setOrders(orders));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* postOrderSaga(action) {
  try {
    const token = yield select(getToken);
    yield call(postOrder, action.payload, token);
  } catch (error) {
    yield put(setPostError(error.toString()));
  }
  yield call(loadOrders);
}

export default function* watchOrdersLoad() {
  yield takeEvery(types.LOAD_ORDERS, handleOrdersLoad);
}

export function* watchPostOrder() {
  yield takeEvery(types.POST_ORDER, postOrderSaga);
}
