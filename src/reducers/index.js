import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
console.log(OrderReducer);

export default combineReducers({
  orders: OrderReducer,
});
