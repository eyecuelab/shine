import { all } from 'redux-saga/effects';
import { watchUserAuthentication, watchCleanerActions } from './watchers';
import watchOrdersLoad, {
  watchPostOrder,
  watchOrdersReload,
} from './ordersSaga';

export default function* rootSaga() {
  yield all([
    watchUserAuthentication(),
    watchCleanerActions(),
    watchOrdersLoad(),
    watchPostOrder(),
    watchOrdersReload(),
  ]);
}
