import { all } from 'redux-saga/effects';
import { watchUserAuthentication, watchCleanerActions } from './watchers';
import watchOrdersLoad, {
  watchPostOrder,
  watchOrdersReload,
  watchPublishOrder,
  watchGetOrderById,
} from './ordersSaga';

export default function* rootSaga() {
  yield all([
    watchUserAuthentication(),
    watchOrdersLoad(),
    watchPostOrder(),
    watchCleanerActions(),
    watchOrdersReload(),
    watchPublishOrder(),
    watchGetOrderById(),
  ]);
}
