import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialAuthState = {
  auth: {
    token: null,
    profile: {},
  },
  authMessage: null,
  status: 'Logged out',
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    // case REHYDRATE:
    //   return {
    //     ...state,
    //   };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        authMessage: null,
        status: 'Logged in',
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        authMessage: action.error,
        status: 'Login error',
      };
    case types.LOGIN_CANCELLED:
      return {
        ...state,
        authMessage: null,
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
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        status: 'Signed up',
        auth: {
          token: null,
          profile: {},
        },
        authMessage: 'You have seccessfully signed up',
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        authMessage: action.error,
        status: 'Signup error',
      };
    default:
      return state;
  }
};

export default authReducer;
