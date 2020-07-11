import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const cleanerReducer = (state = {}, action) => {
  switch (action.type) {
    // case REHYDRATE:
    //   return null;
    case types.ADD_CLEANER_PROFILE:
      return action.payload;
    case types.DELETE_CLEANER_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default cleanerReducer;
