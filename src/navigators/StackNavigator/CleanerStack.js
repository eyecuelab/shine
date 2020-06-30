import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// SCREEN IMPORTS:
import CleanerOptionScreen from '../../screens/cleaner/CleanerOptionScreen';
import SignInScreen from '../../screens/shared/SignInScreen';

const CleanerStack = createStackNavigator();

const CleanerStackNavigator = () => {
  return (
    <CleanerStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          borderBottomColor: 'white',
          shadowColor: 'white',
        },
        headerTintColor: 'black',
        headerBackTitleVisible: false,
      }}
    >
      <CleanerStack.Screen
        name="Cleaner Option Screen"
        component={CleanerOptionScreen}
        options={{ title: '' }}
      />
      <CleanerStack.Screen name="Log in" component={SignInScreen} />
    </CleanerStack.Navigator>
  );
};

export default CleanerStackNavigator;
