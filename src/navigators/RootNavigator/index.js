import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import OrderStack from "./OrderStack";
import HomeStack from "./HomeStack";
import CleanersDrawer from "../DrawerNavigator/CleanersDrawer";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#8E1818',
        inactiveTintColor: '#939393',
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
          <HomeStack />       
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

export default RootNavigator;