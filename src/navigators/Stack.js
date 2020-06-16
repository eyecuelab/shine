import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Profile from "../screens/cleaner/CleanerProfileScreen";
import Settings from "../screens/shared/SettingsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tab" component={Tabs} />
    {/* <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
);

export default StackNavigator;