import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as types from '../actions/types';
import { fetchOrders } from '../api';
import { setOrders, setError } from '../actions';

export const getToken = (state) => state.users.auth.token;

export function* handleOrdersLoad() {
  try {
    const token = yield select(getToken);
    const orders = yield call(fetchOrders, token);
    console.log('ORDERS', orders);
    yield put(setOrders(orders));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchOrdersLoad() {
  yield takeEvery(types.LOAD_ORDERS, handleOrdersLoad);
}
