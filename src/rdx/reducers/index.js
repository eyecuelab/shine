import { combineReducers } from 'redux';
import orderReducer from './OrderReducer';
import authReducer from './AuthReducer';
import cleanerReducer from './CleanerReducer';
import errorReducer from './ErrorReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  users: authReducer,
  cleaner: cleanerReducer,
  error: errorReducer,
});

export default rootReducer;
