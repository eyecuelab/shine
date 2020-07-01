import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create middleware for redux
let middleware = applyMiddleware(sagaMiddleware);
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Persist and rehydrate a redux store
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  reduxDevTools(middleware),
);

// // Create redux store
// const store = createStore(rootreducer, reduxDevTools(middleware));
export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

// Run saga watchers
sagaMiddleware.run(rootSaga);

// export default store;
