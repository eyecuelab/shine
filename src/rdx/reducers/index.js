import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  users: authReducer,
});

export default rootReducer;
