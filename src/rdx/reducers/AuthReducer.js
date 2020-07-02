import * as types from '../actions/types';
// import { REHYDRATE } from 'redux-persist/lib/constants';

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
    // case REHYDRATE:
    //   return { ...state, persistedState: action.payload };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        status: 'Logged in',
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        status: 'Login error',
        authError: action.error,
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
