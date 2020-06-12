import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import SideBar from "../components/shared/SideBar";
import { Feather } from "@expo/vector-icons";

// routes
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
import Camera from "../components/order/Camera";

// drawer navigation options
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
      }  
    },
    LogIn: {
      screen: LogInScreen,
      navigationOptions: {
        title: "Log in",
        drawerIcon: ({ tintColor }) => <Feather name="log-in" size={16} color={tintColor} />
      }  
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings",
        drawerIcon: ({ tintColor }) => <Feather name="settings" size={16} color={tintColor} />
      }  
    },
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        title: "Welcome",
        drawerIcon: ({ tintColor }) => <Feather name="smile" size={16} color={tintColor} />
      }  
    },
    CleanerApplication: {
      screen: CleanerApplicationScreen,
      navigationOptions: {
        title: "Cleaner Application",
        drawerIcon: ({ tintColor }) => <Feather name="file-text" size={16} color={tintColor} />
      }  
    },
    NewOrder: {
      screen: NewOrderScreen, 
      navigationOptions: {
        title: "New Order",
        drawerIcon: ({ tintColor }) => <Feather name="clipboard" size={16} color={tintColor} />
      }  
    },
    CleanerProfile: {
      screen: CleanerProfileScreen,
      navigationOptions: {
        title: "Cleaner Profile",
        drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
      }  
    },
    CompletedOrders: {
      screen: CompletedOrdersScreen,
      navigationOptions: {
        title: "Completed Orders",
        drawerIcon: ({ tintColor }) => <Feather name="check-square" size={16} color={tintColor} />
      }  
    },
    LiveOrders: {
      screen: LiveOrdersScreen,
      navigationOptions: {
        title: "Live Orders",
        drawerIcon: ({ tintColor }) => <Feather name="check-circle" size={16} color={tintColor} />
      }  
    },
    OrdersInArea: {
      screen: OrdersInAreaScreen,
      navigationOptions: {
        title: "Orders In Area",
        drawerIcon: ({ tintColor }) => <Feather name="map-pin" size={16} color={tintColor} />
      }  
    },
    Camera: {
      screen: Camera,
      navigationOptions: {
        title: "Camera",
        drawerIcon: ({ tintColor }) => <Feather name="camera" size={16} color={tintColor} />
      }  
    }
  },
  {
    contentComponent: props => <SideBar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.8,
      hideStatusBar: true,

      contentOptions: {
        activeBackgroundColor: "rgb(219, 213, 180)",
        activeTintColor: "rgb(99, 93, 58)",
        itemsContainerStyle: {
          marginTop: 16,
          marginHorizontal: 8
        },
        itemStyle: {
          borderRadius: 4
        }
      }
  }
);  

export default createAppContainer(DrawerNavigator);