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
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="NewOrder" component={NewOrderScreen} />
    <HomeStack.Screen name="OrdersList" component={OrdersListScreen} />
    <HomeStack.Screen name="OrderDetail" component={OrderDetailScreen} />
    <HomeStack.Screen name="OrderFinal" component={OrderFinalScreen} />
    <HomeStack.Screen name="OrderStatus" component={OrderStatusScreen} />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
