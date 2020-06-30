import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  orders: OrderReducer,
  users: AuthReducer,
});

export default rootReducer;
