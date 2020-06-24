import * as React from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const initialAuthState = {
    isLoading: true,
    isSignout: false,
    userName: null,
    userToken: null,
  };

  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          userName: action.name,
          userToken: action.token,
          isSignout: false,
          isLoading: false,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isSignout: true,
          isLoading: false,
        };
    }
  };

  const [authState, dispatch] = React.useReducer(authReducer, initialAuthState);
  console.log('AUTH STATE: ', authState);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        axios
          .post(`https://shoeshine.herokuapp.com/login`, {
            email: data['username'],
            password: data['password'],
          })

          .then((response) => {
            const userToken = response.data.data.attributes.token;
            const userName =
              response.data.included[0].attributes.first_name +
              ' ' +
              response.data.included[0].attributes.last_name;

            dispatch({ type: 'SIGN_IN', name: userName, token: userToken });
          });

        // const _storeToken = async () => {
        //   console.log('Token: ', userToken);
        //   try {
        //     await AsyncStorage.setItem('userToken', userToken);
        //   } catch (error) {
        //     console.log('Something went wrong', error);
        //   }
        // };
        // _storeToken();
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (error) {
          console.log('Something went wrong', error);
        }
        dispatch({ type: 'SIGN_OUT' });
      },

      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    [],
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      // userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (error) {
        console.log('Something went wrong', error);
      }
      console.log('user token: ', userToken);
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  return (
    <AuthContext.Provider value={{ authContext, authState }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
