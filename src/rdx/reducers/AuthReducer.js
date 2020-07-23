import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialAuthState = {
  data: null,
  errorMessage: null,
  signupMessage: null,
  confirmationMessage: null,
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
        data: action.payload,
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
        data: null,
        errorMessage: null,
        signupMessage: null,
        status: 'Logged out',
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        data: null,
        errorMessage: null,
        signupMessage: 'Sign Up Successful!',
        status: 'Signed up',
      };
    case types.CONFIRM_USER_SUCCESS:
      return {
        ...state,
        data: null,
        errorMessage: null,
        signUpMessage: null,
        confirmationMessage: 'Account Confirmed!',
      };
    case types.CONFIRM_USER_ERROR:
      return {
        ...state,
        data: null,
        confirmationMessage: 'Invalid Authorization Code, Please Try Again.',
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        signupMessage: action.error,
        status: 'Signup error',
      };
    case types.SET_PROFILE:
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
        signUpMessage: null,
        status: 'Logged and Loaded',
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
        status: 'User Profile Updated!',
      };
    case types.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        errorMessage: action.error,
        signupMessage: null,
        status: 'User profile update error',
      };
    case types.SET_STATUS:
      return {
        ...state,
        status: 'Logged In',
      };
    default:
      return state;
  }
};

export default authReducer;
