import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/shared/HomeScreen";
import SelectPhotoScreen from "../components/order/SelectPhoto";
import OrderSpecsScreen from "../components/order/OrderSpecs";
import OrderNotesScreen from "../components/order/OrderNotes";
import SetupOrAddScreen from "../components/order/SetupOrAdd";
import OrdersListScreen from "../components/order/OrdersList";

const OrdersStack = createStackNavigator();

const OrdersStackNavigator = () => (
  <OrdersStack.Navigator>
    <OrdersStack.Screen name="Home"component={HomeScreen} />
    <OrdersStack.Screen name="SelectPhoto" component={SelectPhotoScreen} />
    <OrdersStack.Screen name="OrderSpecs"component={OrderSpecsScreen} />
    <OrdersStack.Screen name="OrderNotes"component={OrderNotesScreen} />
    <OrdersStack.Screen name="SetupOrAdd"component={SetupOrAddScreen} />
    <OrdersStack.Screen name="OrdersList"component={OrdersListScreen} />
  </OrdersStack.Navigator>
);

export default OrdersStackNavigator;