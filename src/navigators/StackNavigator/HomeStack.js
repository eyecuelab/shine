import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// SCREEN IMPORTS:
import HomeScreen from '../../screens/shared/HomeScreen';
import NewOrderScreen from '../../screens/client/NewOrderScreen';
import OrderDetailScreen from '../../screens/client/OrderDetailScreen';
import OrderFinalScreen from '../../screens/client/OrderFinalScreen';
import OrderStatusScreen from '../../screens/client/OrderStatusScreen';
import OrderConfrimScreen from '../../screens/client/OrderConfirmScreen';
import WelcomeScreen from '../../screens/shared/WelcomeScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#CBB387',
          borderBottomColor: '#CBB387',
          shadowColor: '#CBB387',
        },
        headerTitleStyle: {
          fontFamily: 'Marison-Sans-Round',
        },
        headerTintColor: '#FFFFFF',
        headerBackTitleVisible: false,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '' }}
      />
      <HomeStack.Screen
        name="NewOrder"
        component={NewOrderScreen}
        options={{ title: 'NEW ORDER' }}
      />
      <HomeStack.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{ title: 'ADD ONS' }}
      />
      <HomeStack.Screen
        name="OrderFinal"
        component={OrderFinalScreen}
        options={{ title: 'DETAILS' }}
      />
      <HomeStack.Screen
        name="OrderConfrim"
        component={OrderConfrimScreen}
        options={{ title: 'QUOTE DETAILS' }}
      />
      <HomeStack.Screen
        name="OrderStatus"
        component={OrderStatusScreen}
        options={{ title: 'ORDER STATUS' }}
      />
      <HomeStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: 'PROFILE' }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
