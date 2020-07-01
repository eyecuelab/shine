import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// SCREEN IMPORTS:
import CleanerOptionScreen from '../../screens/cleaner/CleanerOptionScreen';
import SignInScreen from '../../screens/shared/SignInScreen';
import CleanerApplicationScreen from '../../screens/cleaner/CleanerApplicationScreen';

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
      <CleanerStack.Screen
        name="Cleaner Application"
        component={CleanerApplicationScreen}
        options={{ title: 'Application' }}
      />
      <CleanerStack.Screen name="Log in" component={SignInScreen} />
    </CleanerStack.Navigator>
  );
};

export default CleanerStackNavigator;
