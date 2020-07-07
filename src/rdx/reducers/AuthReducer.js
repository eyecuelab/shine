import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialAuthState = {
  auth: {
    token: null,
    profile: {},
  },
  authError: null,
  status: 'Logged out',
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
      };
    case types.LOGIN_SUCCESS:
      console.log('REDUCER', action.payload.token);
      return {
        ...state,
        auth: action.payload,
        authError: null,
        status: 'Logged in',
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        authError: action.error,
        status: 'Login error',
      };
    case types.LOGIN_CANCELLED:
      return {
        ...state,
        authError: null,
        status: 'Login cancelled',
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        status: 'Logged out',
        auth: {
          token: null,
          profile: {},
        },
      };

    default:
      return state;
  }
};

export default authReducer;
