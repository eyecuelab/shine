import * as types from '../actions/types';
import { AsyncStorage } from 'react-native';

// const initialAuthState = {
//   token: null,
//   profile: {},
// };
const initialAuthState = {
  auth: {
    token: null,
    profile: {},
  },
};

const authReducer = (prevState = initialAuthState, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE:
      return {
        ...prevState,
        auth: action.payload,
      };

    // case types.LOGIN_ERROR:
    //   return {
    //     ...prevState,
    //     authError: action.err.message,
    //   };
    // case types.LOGIN_SUCCESS:
    //   console.log('Login success');
    //   return {
    //     ...prevState,
    //     userName: action.name,
    //     userToken: action.token,
    //     userEmail: action.email,
    //     isSignout: false,
    //     isLoading: false,
    //     authError: null,
    //   };
    // case types.LOGOUT_SUCCESS:
    //   console.log('Signout success');
    //   return {
    //     ...prevState,
    //     userName: null,
    //     userToken: null,
    //     userEmail: null,
    //     isSignout: true,
    //     isLoading: false,
    //   };
    // case types.SIGNUP_SUCCESS:
    //   console.log('Signup success');
    //   return {
    //     ...prevState,
    //     authError: null,
    //   };
    // case types.SIGNUP_ERROR:
    //   console.log('Signup error');
    //   return {
    //     ...prevState,
    //     authError: action.err.message,
    //   };
    default:
      return prevState;
  }
};

export default authReducer;