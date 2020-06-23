import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../screens/shared/SignInScreen';
import SignUpScreen from '../../screens/shared/SignUpScreen';
import ClientProfileScreen from '../../screens/client/ClientProfileScreen';
import AuthContext from '../../components/AuthContext';

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {

  const { state } = React.useContext(AuthContext);
  // console.log("state", state);

  return (
    <ProfileStack.Navigator>
      {
        state.userToken == null ? (
          <>
            <ProfileStack.Screen name="Sign up" component={SignUpScreen} />
            <ProfileStack.Screen name="Log in" component={SignInScreen} />
          </>
        ) : (
          <ProfileStack.Screen name="Profile" component={ClientProfileScreen} />
        )
      }
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
