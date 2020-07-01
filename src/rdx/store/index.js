import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create middleware for redux
let middleware = applyMiddleware(sagaMiddleware);
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create redux store
const store = createStore(reducer, reduxDevTools(middleware));

// Run saga watchers
sagaMiddleware.run(rootSaga);

export default store;
