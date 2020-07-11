import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialCleanerState = {
  cleaner: {},
  errorMessage: null,
};

const cleanerReducer = (state = initialCleanerState, action) => {
  switch (action.type) {
    // case REHYDRATE:
    //   return { ...state };
    case types.ADD_CLEANER_PROFILE:
      return {
        cleaner: action.payload,
        errorMessage: null,
      };
    case types.ADD_CLEANER_ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };
    case types.DELETE_CLEANER_SUCCESS:
      return initialCleanerState;
    default:
      return state;
  }
};

export default cleanerReducer;
