import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

// const middleware = [applyMiddleware(sagaMiddleware)];
// const preloadedState = {};

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
// sagaMiddleware.run(rootSaga);

export default store;
