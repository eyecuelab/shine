import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../screens/shared/SignInScreen';
import SignUpScreen from '../../screens/shared/SignUpScreen';

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Sign up" component={SignUpScreen} />
    <ProfileStack.Screen name="Log in" component={SignInScreen} />
  </ProfileStack.Navigator>
);

export default ProfileStackNavigator;
