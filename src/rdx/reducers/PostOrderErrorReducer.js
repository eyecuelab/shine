import * as types from '../action/types';

const postOrderErrorReducer = (state = null, action) => {
  switch (action.type) {
    case types.POST_ORDER_FAIL:
      return action.error;
    case types.POST_ORDER:
    case types.POST_ORDER_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default postOrderErrorReducer;
