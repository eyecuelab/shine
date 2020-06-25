import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../screens/shared/SignInScreen';
import SignUpScreen from '../../screens/shared/SignUpScreen';
import ClientProfileScreen from '../../screens/client/ClientProfileScreen';
import AuthContext from '../../components/AuthContext';
import CleanerApplicationScreen from '../../screens/client/CleanerApplicationScreen';

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
  const { authState } = React.useContext(AuthContext);
  // console.log("state", state);

  return (
    <ProfileStack.Navigator>
      {authState.userToken == null ? (
        <>
          <ProfileStack.Screen name="Sign up" component={SignUpScreen} />
          <ProfileStack.Screen name="Log in" component={SignInScreen} />
        </>
      ) : (
        <>
          <ProfileStack.Screen name="Profile" component={ClientProfileScreen} />
          <ProfileStack.Screen
            name="CleanerApplication"
            component={CleanerApplicationScreen}
          />
        </>
      )}
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
