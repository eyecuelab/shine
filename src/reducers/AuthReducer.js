import * as types from '../actions/types';

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return {
        ...state,
        authError: action.err.message,
      };
    case types.LOGIN_SUCCESS:
      console.log('Login success');
      return {
        ...state,
        authError: null,
      };
    case types.LOGOUT_SUCCESS:
      console.log('Signout success');
      return state;
    case types.SIGNUP_SUCCESS:
      console.log('Signup success');
      return {
        ...state,
        authError: null,
      };
    case types.SIGNUP_ERROR:
      console.log('Signup error');
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
