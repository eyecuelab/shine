import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screens/shared/HomeScreen";
import OrderStatus from "../components/order/OrderStatus";
import Drawer from "./Drawer";


const Tab = createBottomTabNavigator();
// const SettingsStack = createStackNavigator();
// const HomeStack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />  
      <Tab.Screen name="Client" component={OrderStatus} />
      <Tab.Screen name="Cleaner">
        {() => (
          <Drawer />
        )}
      </Tab.Screen>  
    </Tab.Navigator>
  );
}

export default TabNavigator;