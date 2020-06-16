import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import SideBar from "../components/shared/SideBar";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "../screens/shared/HomeScreen";
import LogInScreen from "../screens/shared/LogInScreen";
import SettingsScreen from "../screens/shared/SettingsScreen";
import WelcomeScreen from "../screens/shared/WelcomeScreen";
import CleanerApplicationScreen from "../screens/client/CleanerApplicationScreen";
import NewOrderScreen from "../screens/client/NewOrderScreen";
import CleanerProfileScreen from "../screens/cleaner/CleanerProfileScreen";
import CompletedOrdersScreen from "../screens/cleaner/CompletedOrdersScreen";
import LiveOrdersScreen from "../screens/cleaner/LiveOrdersScreen";
import OrdersInAreaScreen from "../screens/cleaner/OrdersInAreaScreen";
import OrderNotes from "../components/order/OrderNotes";
import OrderSpecs from "../components/order/OrderSpecs";
import SetupOrAdd from "../components/order/SetupOrAdd";
import TakePhoto from "../components/order/TakePhoto";
import SelectPhoto from "../components/order/SelectPhoto";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      hideStatusBar={true}
      drawerContent={props => <SideBar {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: "#CBB387",
        activeTintColor: "rgb(99, 93, 58)",
        itemsContainerStyle: {
          marginTop: 16,
          marginHorizontal: 8
        },
        itemStyle: {
          borderRadius: 4
        }
      }}
      screenOptions={({ route }) => ({
        drawerIcon: ({ tintColor }) => {
          const icons = {
            Home: 'home',
            Login: 'log-in',
            Settings: 'settings',
            Welcome: 'smile',
            CleanerApplication: 'file-text',
            NewOrder: 'clipboard',
            CleanerProfile: 'user',
            CompletedOrders: 'check-square',
            LiveOrders: 'check-circle',
            OrdersInArea: 'map-pin'
          };
          return (
            <Feather
              name={icons[route.name]}
              color={tintColor}
              size={16}
            />
          );
        },
      })}
    >
      {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
      <Drawer.Screen name="Login" component={LogInScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="CleanerApplication" component={CleanerApplicationScreen} options={{ title: 'Cleaner Application' }} />
      <Drawer.Screen name="NewOrder" component={NewOrderScreen} options={{ title: 'New Order' }} />
      <Drawer.Screen name="CleanerProfile" component={CleanerProfileScreen} options={{ title: 'Cleaner Profile' }} />
      <Drawer.Screen name="CompletedOrders" component={CompletedOrdersScreen} options={{ title: 'Completed Orders' }} />
      <Drawer.Screen name="LiveOrders" component={LiveOrdersScreen} options={{ title: 'Live Orders' }} />
      <Drawer.Screen name="OrdersInArea" component={OrdersInAreaScreen} options={{ title: 'Orders In Area' }} />
      <Drawer.Screen name="SelectPhoto" component={SelectPhoto} options={{ title: 'Select Photo'}} />
      <Drawer.Screen name="OrderNotes" component={OrderNotes} />
      <Drawer.Screen name="OrderSpecs" component={OrderSpecs} />
      <Drawer.Screen name="SetupOrAdd" component={SetupOrAdd} />
      <Drawer.Screen name="TakePhoto" component={TakePhoto} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator; 
