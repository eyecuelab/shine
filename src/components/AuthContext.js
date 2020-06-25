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
    userEmail: null,
  };

  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userName: action.name,
          userToken: action.token,
          userEmail: action.email,
          isLoading: false,
        };
      case 'SIGN_IN':
        if (action.token) {
          AsyncStorage.setItem('userToken', action.token);
        }
        if (action.name) {
          AsyncStorage.setItem('userName', action.name);
        }
        if (action.email) {
          AsyncStorage.setItem('userEmail', action.email);
        }
        return {
          ...prevState,
          userName: action.name,
          userToken: action.token,
          userEmail: action.email,
          isSignout: false,
          isLoading: false,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          userEmail: null,
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
            email: data['email'],
            password: data['password'],
          })

          .then((response) => {
            const userToken = response.data.data.attributes.token;
            const userName =
              response.data.included[0].attributes.first_name +
              ' ' +
              response.data.included[0].attributes.last_name;
            const userEmail = response.data.included[0].attributes.email;

            dispatch({
              type: 'SIGN_IN',
              name: userName,
              token: userToken,
              email: userEmail,
            });
          })

          .catch((error) => {
            alert(
              'Incorrect email or password',
              'Email is invalid',
              "Password can't be blanck",
            );
          });
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userName');
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('userEmail');
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
    const bootstrapAsync = async () => {
      let userToken;
      let userName;
      let userEmail;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        userName = await AsyncStorage.getItem('userName');
        userEmail = await AsyncStorage.getItem('userEmail');
      } catch (error) {
        console.log('Something went wrong', error);
      }

      dispatch({ type: 'RESTORE_TOKEN', name: userName, token: userToken });
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
