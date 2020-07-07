import * as types from '../actions/types';

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case types.LOAD_ORDERS_FAIL:
      return action.error;
    case types.LOAD_ORDERS:
    case types.LOAD_ORDERS_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
