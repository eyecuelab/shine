import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialAuthState = {
  data: null,
  errorMessage: null,
  signupMessage: null,
  status: 'Logged out',
  cleaner: {},
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
        data: action.payload,
        errorMessage: null,
        signupMessage: null,
        status: 'Logged in',
        cleaner: { ...action.payload.included[1] },
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
        data: null,
        errorMessage: null,
        signupMessage: null,
        status: 'Logged out',
        cleaner: {},
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        data: null,
        errorMessage: null,
        signupMessage: 'You have seccessfully signed up',
        status: 'Signed up',
        cleaner: null,
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
        data: {
          links: { ...state.data.links },
          meta: { ...state.data.meta },
          included: {
            ...state.data.included,
            [0]: action.payload,
          },
          data: { ...state.data.data },
        },
        errorMessage: null,
        signupMessage: null,
        status: 'User profile updated',
        cleaner: { ...state.data.included[1] },
      };
    case types.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        errorMessage: action.error,
        signupMessage: null,
        status: 'User profile update error',
      };

    case types.ADD_CLEANER_PROFILE:
      return {
        ...state,
        errorMessage: null,
        signupMessage: null,
        status: 'Cleaner profile added',
        cleaner: action.payload.data,
      };

    case types.UPDATE_CLEANER_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        signupMessage: null,
        status: 'Cleaner profile updated',
        cleaner: action.payload.data,
      };

    case types.DELETE_CLEANER_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        signupMessage: null,
        status: 'Cleaner profile deleted',
        cleaner: {},
      };
    default:
      return state;
  }
};

export default authReducer;
