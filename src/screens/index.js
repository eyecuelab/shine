import React from "react";
import Screen from "./shared/HomeScreen";
// import CleanerApplicationScreen from "./client/CleanerApplicationScreen";

export const CleanerApplicationScreen = ({ navigation }) => <Screen navigation={navigation} name="Cleaner Application" />;
export const NewOrderScreen = ({ navigation }) => <Screen navigation={navigation} name="New Order" />;
export const CleanerProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Cleaner Profile" />;
export const CompletedOrderScreen = ({ navigation }) => <Screen navigation={navigation} name="Completed Orders" />;
export const LiveOrdersScreen = ({ navigation }) => <Screen navigation={navigation} name="Live Orders" />;
export const OrdersInAreaScreen = ({ navigation }) => <Screen navigation={navigation} name="Orders In Area" />;

