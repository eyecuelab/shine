import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/shared/HomeScreen';
import NewOrderScreen from '../../screens/client/NewOrderScreen';
import SelectPhotoScreen from '../../components/order/SelectPhoto';
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
      component={HomeScreen}
      options={{ title: '' }}
    />
    <HomeStack.Screen
      name="NewOrder"
      component={NewOrderScreen}
      options={{ title: 'NEW ORDER' }}
    />
    {/* <HomeStack.Screen
      name="SelectPhoto"
      component={SelectPhotoScreen}
      options={{ title: 'Add another Order' }}
    /> */}
    <HomeStack.Screen
      name="OrdersList"
      component={OrdersListScreen}
      options={{ title: 'SET UP JOB' }}
    />
    <HomeStack.Screen
      name="OrderDetail"
      component={OrderDetailScreen}
      options={{ title: '' }}
    />
    <HomeStack.Screen
      name="OrderFinal"
      component={OrderFinalScreen}
      options={{ title: 'Order Final' }}
    />
    <HomeStack.Screen
      name="OrderStatus"
      component={OrderStatusScreen}
      options={{ title: 'Order Status' }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
