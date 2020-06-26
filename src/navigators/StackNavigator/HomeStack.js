import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/shared/HomeScreen';
import NewOrderScreen from '../../screens/client/NewOrderScreen';
import OrdersListScreen from '../../screens/client/OrdersListScreen';
import OrderDetailScreen from '../../screens/client/OrderDetailScreen';
import OrderFinalScreen from '../../screens/client/OrderFinalScreen';
import OrderStatusScreen from '../../screens/client/OrderStatusScreen';

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
      component={OrdersListScreen}
      options={{ title: '' }}
    />
    <HomeStack.Screen
      name="NewOrder"
      component={NewOrderScreen}
      options={{ title: 'New Order' }}
    />
    <HomeStack.Screen
      name="OrdersList"
      component={OrdersListScreen}
      options={{ title: 'Orders List' }}
    />
    <HomeStack.Screen
      name="OrderDetail"
      component={OrderDetailScreen}
      options={{ title: 'Order Detail' }}
    />
    <HomeStack.Screen
      name="OrderFinal"
      component={OrderFinalScreen}
      options={{ title: '' }}
    />
    <HomeStack.Screen
      name="OrderStatus"
      component={OrderStatusScreen}
      options={{ title: '' }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
