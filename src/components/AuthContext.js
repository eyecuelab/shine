import * as React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";


const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
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
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        axios.post(`https://shoeshine.herokuapp.com/login`, {
        "email": data["username"], 
        "password": data["password"]
      })
      .then((response) => {
        console.log(response.data.data.attributes.token);
      }, (error) => {
        console.log(error);
      });
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );


  // const logIn = () => axios.post(`https://shoeshine.herokuapp.com/login`, {
  //   "email": "example@example.com", 
  //   "password": "theshoe"
  // })
  // .then((response) => {
  //   console.log(response);
  // }, (error) => {
  //   console.log(error);
  // });

  console.log("test", () => authContext.signIn());
   
  return (
    <AuthContext.Provider value={{authContext, state}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node
};

export default AuthContext;