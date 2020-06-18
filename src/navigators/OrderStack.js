import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/shared/HomeScreen";
import SelectPhotoScreen from "../components/order/SelectPhoto";
import OrderSpecsScreen from "../components/order/OrderSpecs";
import OrderNotesScreen from "../components/order/OrderNotes";
import SetupOrAddScreen from "../components/order/SetupOrAdd";
import OrdersListScreen from "../screens/client/OrdersList";

const OrderStack = createStackNavigator();

const OrderStackNavigator = () => (
  <OrderStack.Navigator>
    <OrderStack.Screen name="Home"component={HomeScreen} />
    <OrderStack.Screen name="SelectPhoto" component={SelectPhotoScreen} />
    <OrderStack.Screen name="OrderSpecs"component={OrderSpecsScreen} />
    <OrderStack.Screen name="OrderNotes"component={OrderNotesScreen} />
    <OrderStack.Screen name="SetupOrAdd"component={SetupOrAddScreen} />
    <OrderStack.Screen name="OrdersList"component={OrdersListScreen} />
  </OrderStack.Navigator>
);

export default OrderStackNavigator;