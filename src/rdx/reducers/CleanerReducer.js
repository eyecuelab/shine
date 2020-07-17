import * as types from '../actions/types';

const initialCleanerState = {
  data: null,
  quotableOrders: [],
  errorMessage: null,
};

const cleanerReducer = (state = initialCleanerState, action) => {
  switch (action.type) {
    case types.LOAD_CLEANER:
      return {
        data:
          action.payload.included[1] !== undefined
            ? action.payload.included[1]
            : null,
        errorMessage: null,
      };
    case types.LOGOUT_SUCCESS:
      return {
        data: null,
        errorMessage: null,
      };

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
    case types.UPDATE_CLEANER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        errorMessage: null,
      };
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
    case types.SET_QUOTABLE_ORDERS:
      return {
        ...state,
        quotableOrders: action.payload,
        errorMessage: null,
      };
    case types.POST_ORDER_SUCCESS:
      return {
        ...state,
        errorMessage: null,
      };
    case types.POST_QUOTE_ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export default cleanerReducer;
