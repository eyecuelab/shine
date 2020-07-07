import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watchers';
import watchOrdersLoad from './ordersSaga';

export default function* rootSaga() {
  yield fork(watchUserAuthentication);
  yield fork(watchOrdersLoad);
}
