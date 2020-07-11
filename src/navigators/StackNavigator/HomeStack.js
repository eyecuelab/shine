import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// SCREEN IMPORTS:
import HomeScreen from '../../screens/shared/HomeScreen';
import NewOrderScreen from '../../screens/client/NewOrderScreen';
import OrderDetailScreen from '../../screens/client/OrderDetailScreen';
import OrderFinalScreen from '../../screens/client/OrderFinalScreen';
import OrderStatusScreen from '../../screens/client/OrderStatusScreen';
import OrderConfrimScreen from '../../screens/client/OrderConfirmScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CBB387',
        borderBottomColor: '#CBB387',
        shadowColor: '#CBB387',
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
      options={{ title: '' }}
    />
    <HomeStack.Screen
      name="OrderFinal"
      component={OrderFinalScreen}
      options={{ title: "CLEANSER'S PROPOSALS" }}
    />
    <HomeStack.Screen
      name="OrderConfrim"
      component={OrderConfrimScreen}
      options={{ title: 'ORDER SUMMARY' }}
    />
    <HomeStack.Screen
      name="OrderStatus"
      component={OrderStatusScreen}
      options={{ title: 'ORDER STATUS' }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
