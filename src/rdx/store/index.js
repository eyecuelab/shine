import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create middleware for redux
let middleware = applyMiddleware(sagaMiddleware);

// Create redux store
const store = createStore(
  reducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

// Run saga watchers
sagaMiddleware.run(rootSaga);

export default store;
