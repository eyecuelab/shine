import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialCleanerState = {
  data: null,
  errorMessage: null,
};

const cleanerReducer = (state = initialCleanerState, action) => {
  switch (action.type) {
    // case REHYDRATE:
    //   return { ...state };
    case types.ADD_CLEANER_PROFILE:
      return {
        data: action.payload,
        errorMessage: null,
      };
    case types.ADD_CLEANER_ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };
    case types.UPDATE_CLEANER_PROFILE:
      console.log('REDUCER', action.payload);
    // return {
    //   ...state,
    //   data: action.payload,
    //   errorMessage: null,
    // };
    case types.UPDATE_CLEANER_ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };
    case types.DELETE_CLEANER_SUCCESS:
      return {
        data: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default cleanerReducer;
