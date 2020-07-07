import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as types from '../actions/types';
import { fetchOrders } from '../api';
import { setOrders } from '../actions';

export const getToken = (state) => state.users.token;

export function* handleOrdersLoad() {
  const token = yield select(getToken);
  console.log(token);
  const orders = yield call(fetchOrders, token);
  yield put(setOrders(orders));
}

export default function* watchOrdersLoad() {
  yield takeEvery(types.GET_ORDERS, handleOrdersLoad);
}
