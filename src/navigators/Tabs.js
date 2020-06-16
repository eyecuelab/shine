import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdersStack from "./OrdersStack";
import CleanersDrawer from "./CleanersDrawer";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#8E1818',
        inactiveTintColor: '#939393',
        // style: {
        //   backgroundColor: '#CBB387'
        // }  
      }}
    >
      <Tab.Screen 
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      >
        {() => (
          <OrdersStack />
        )}
      </Tab.Screen>
      <Tab.Screen 
        name="Cleaner"
        options={{
          tabBarLabel: 'Cleaner',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      >
        {() => (
          <CleanersDrawer />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default TabNavigator;