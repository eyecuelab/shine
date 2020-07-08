import { all } from 'redux-saga/effects';
import watchUserAuthentication from './watchers';
import watchOrdersLoad, { watchPostOrder } from './ordersSaga';

export default function* rootSaga() {
  yield all([watchUserAuthentication(), watchOrdersLoad(), watchPostOrder()]);
}
