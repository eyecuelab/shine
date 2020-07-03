import { combineReducers } from 'redux';
import orderReducer from './OrderReducer';
import authReducer from './AuthReducer';
import cleanerReducer from './CleanerReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  users: authReducer,
  cleaner: cleanerReducer,
});

export default rootReducer;
