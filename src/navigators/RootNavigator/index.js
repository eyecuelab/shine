/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../StackNavigator/HomeStack';
import ProfileStack from '../StackNavigator/ProfileStack';
import CleanerStack from '../StackNavigator/CleanerStack';
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
        {() => <HomeStack />}
      </Tab.Screen>
      <Tab.Screen
        name="Cleaner"
        options={{
          tabBarLabel: 'Cleaner',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shoe-formal"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() => <CleanerStack />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() => <ProfileStack />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default RootNavigator;
