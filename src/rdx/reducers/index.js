import { combineReducers } from 'redux';
import orderReducer from './OrderReducer';
import authReducer from './AuthReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  users: authReducer,
});

export default rootReducer;
