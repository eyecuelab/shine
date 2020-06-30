import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  orders: OrderReducer,
  users: AuthReducer,
});
