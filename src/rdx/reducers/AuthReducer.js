import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialAuthState = {
  auth: {
    token: null,
    userId: null,
    profile: {},
  },
  errorMessage: null,
  signupMessage: null,
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
        errorMessage: null,
        signupMessage: null,
        status: 'Logged in',
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.error,
        signupMessage: null,
        status: 'Login error',
      };
    case types.LOGIN_CANCELLED:
      return {
        ...state,
        errorMessage: null,
        signupMessage: null,
        status: 'Login cancelled',
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        auth: {
          token: null,
          userId: null,
          profile: {},
        },
        errorMessage: null,
        signupMessage: null,
        status: 'Logged out',
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        auth: {
          token: null,
          userId: null,
          profile: {},
        },
        errorMessage: null,
        signupMessage: 'You have seccessfully signed up',
        status: 'Signed up',
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        signupMessage: action.error,
        status: 'Signup error',
      };
    case types.UPDATE_PROFILE:
      return {
        ...state,
        auth: action.payload,
        errorMessage: null,
        signupMessage: null,
        status: 'Profile updated',
      };
    default:
      return state;
  }
};

export default authReducer;
