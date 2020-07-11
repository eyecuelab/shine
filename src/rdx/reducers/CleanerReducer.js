import * as types from '../actions/types';

const cleanerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_CLEANER_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default cleanerReducer;
