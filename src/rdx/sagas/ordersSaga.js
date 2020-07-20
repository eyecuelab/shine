import { takeEvery, put, call, select, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import {
  fetchOrders,
  postOrder,
  publishOrder,
  getOrderById,
  deleteOrder,
  quoteAccept,
} from '../services/ordersService';
import {
  setOrders,
  setError,
  reloadOrders,
  setPostError,
  setPublishedOrder,
  setPublishError,
  setSelectedOrder,
  setGetOrderByIdError,
  deleteOrderError,
} from '../actions';

export const getToken = (state) => state.users.data.data.attributes.token;
export const getOrderID = (state) => state.orders.selectedOrder.data.id;

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
    yield put(setPublishedOrder(result));
  } catch (error) {
    yield put(setPublishError(error.toString()));
  }
}

export function* getOrderByIdSaga(action) {
  try {
    const orderID = action.payload;
    const token = yield select(getToken);
    const result = yield call(getOrderById, orderID, token);
    yield put(setSelectedOrder(result));
  } catch (error) {
    yield put(setGetOrderByIdError(error.toString()));
  }
}

export function* deleteOrderSaga(action) {
  try {
    const orderID = action.payload;
    const token = yield select(getToken);
    const result = yield call(deleteOrder, orderID, token);
    yield put({ type: types.DELETE_ORDER_SUCCESS });
    const orders = yield call(fetchOrders, token);
    yield put(setOrders(orders));
  } catch (error) {
    yield put(deleteOrderError(error.toString()));
  }
}

export function* quoteAcceptSaga(action) {
  try {
    const orderID = yield select(getOrderID);
    const token = yield select(getToken);
    const result = yield call(quoteAccept, action.payload, orderID, token);
    console.log('SAGA', result);
    // yield put(setPublishedOrder(result));
  } catch (error) {
    // yield put(setPublishError(error.toString()));
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

// export function* watchPublishOrder() {
//   yield takeLatest(types.PUBLISH_ORDER_WATCHER, publishOrderSaga);
// }

// export function* watchGetOrderById() {
//   yield takeLatest(types.GET_ORDER_BY_ID_WATCHER, getOrderByIdSaga);
// }

// export function* watchDeleteOrder() {
//   yield takeLatest(types.DELETE_ORDER_WATCHER, deleteOrderSaga);
// }

// export function* watchQuoteAccept() {
//   yield takeLatest(types.QUOTE_ACCEPT_WATCHER, quoteAcceptSaga);
// }

export function* watchActionsForEachOrder() {
  yield takeLatest(types.PUBLISH_ORDER_WATCHER, publishOrderSaga);
  yield takeLatest(types.GET_ORDER_BY_ID_WATCHER, getOrderByIdSaga);
  yield takeLatest(types.DELETE_ORDER_WATCHER, deleteOrderSaga);
  yield takeLatest(types.QUOTE_ACCEPT_WATCHER, quoteAcceptSaga);
}
