import * as types from '../actions/types';
// import { REHYDRATE } from 'redux-persist/lib/constants';

const initialCleanerState = {
  data: null,
  quotableOrders: null,
  quotedOrders: null,
  errorMessage: null,
  quotedStatus: {},
  inProgress: null,
};

const cleanerReducer = (state = initialCleanerState, action) => {
  switch (action.type) {
    case types.LOAD_CLEANER:
      return {
        ...state,
        data:
          action.payload.included[1] !== undefined
            ? action.payload.included[1]
            : null,
        quotableOrders: state.quotableOrders,
        quotedOrders: state.quotedOrders,
        inProgress: state.inProgress,
        errorMessage: null,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        data: null,
        errorMessage: null,
        quotedOrders: null,
        inProgress: null,
      };

    case types.ADD_CLEANER_PROFILE:
      return {
        ...state,
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
        ...state,
        data: null,
        errorMessage: null,
      };
    case types.SET_QUOTABLE_ORDERS:
      return {
        ...state,
        quotableOrders: action.payload,
        errorMessage: null,
      };
    case types.POST_QUOTE_SUCCESS:
      const orderID = action.payload.orderID;
      const cleanerID = action.payload.cleanerID;
      return {
        ...state,
        quotedStatus: {
          ...state.quotedStatus,
          [orderID]: {
            ...state.quotedStatus[orderID],
            [cleanerID]: 'Requested',
          },
        },
        errorMessage: null,
      };
    case types.POST_QUOTE_ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };
    case types.SET_QUOTED_ORDERS:
      return {
        ...state,
        quotedOrders: action.payload,
      };
    case types.UPDATE_ORDER_BY_CLEANER_SUCCESS:
      return {
        ...state,
        inProgress: {
          ...state.inProgress,
          [action.payload.orderID]: action.payload.status,
        },
      };
    default:
      return state;
  }
};

export default cleanerReducer;
