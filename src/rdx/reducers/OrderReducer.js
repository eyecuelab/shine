import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case REHYDRATE:
      return [];
    case types.LOAD_ORDERS_SUCCESS:
      return [...action.payload];

    case types.REQUEST_COMPLETE:
      return state.map((item) => {
        if (item.uuid === action.uuid) {
          return {
            ...item,
            requestCompleted: action.payload,
          };
        }
        return item;
      });
    // case types.DELETE_ORDER:
    //   return state.filter((item) => item.uuid !== action.uuid);
    default:
      return state;
  }
};

export default orderReducer;
