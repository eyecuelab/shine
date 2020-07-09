import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as types from '../actions/types';
import { fetchOrders, postOrder } from '../api';
import { setOrders, setError, reloadOrders, setPostError } from '../actions';

export const getToken = (state) => state.users.auth.token;

export function* handleOrdersLoad() {
  try {
    const token = yield select(getToken);
    // console.log(token);
    const orders = yield call(fetchOrders, token);
    // console.log('ORDERS', orders);
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

export default function* watchOrdersLoad() {
  yield takeEvery(types.LOAD_ORDERS, handleOrdersLoad);
}

export function* watchPostOrder() {
  yield takeEvery(types.POST_ORDER, postOrderSaga);
}

export function* watchOrdersReload() {
  yield takeEvery(types.POST_ORDER_SUCCESS, handleOrdersLoad);
}
