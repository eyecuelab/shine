import React from "react";
import Screen from "./shared/HomeScreen";
// import CleanerApplicationScreen from "./client/CleanerApplicationScreen";

export const HomeScreen = ({ navigation }) => <Screen navigation={navigation} name="Home" />;
export const LogInScreen = ({ navigation }) => <Screen navigation={navigation} name="Log in" />;
export const SettingsScreen = ({ navigation }) => <Screen navigation={navigation} name="Settings" />;
export const WelcomeScreen = ({ navigation }) => <Screen navigation={navigation} name="Welcome" />;
export const CleanerApplicationScreen = ({ navigation }) => <Screen navigation={navigation} name="Cleaner Application" />;
export const NewOrderScreen = ({ navigation }) => <Screen navigation={navigation} name="New Order" />;
export const CleanerProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Cleaner Profile" />;
export const CompletedOrdersScreen = ({ navigation }) => <Screen navigation={navigation} name="Completed Orders" />;
export const LiveOrdersScreen = ({ navigation }) => <Screen navigation={navigation} name="Live Orders" />;
export const OrdersInAreaScreen = ({ navigation }) => <Screen navigation={navigation} name="Orders In Area" />;

