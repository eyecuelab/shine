import { fork, all } from 'redux-saga/effects';
import watchUserAuthentication from './watchers';

export default function* rootSaga() {
  // yield all([watchUserAuthentication()]);
  yield fork(watchUserAuthentication);
}
