import { all } from 'redux-saga/effects';
import watchUserAuthentication from './watchers';
import watchOrdersLoad from './ordersSaga';

export default function* rootSaga() {
  yield all([watchUserAuthentication(), watchOrdersLoad()]);
}
