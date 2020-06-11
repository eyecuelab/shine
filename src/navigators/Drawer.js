import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import SideBar from "../components/shared/SideBar";

// screens
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

// drawer navigation options
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home"
      }  
    },
    LogIn: {
      screen: LogInScreen,
      navigationOptions: {
        title: "Log in"
      }  
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings"
      }  
    },
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        title: "Welcome"
      }  
    },
    CleanerApplication: {
      screen: CleanerApplicationScreen,
      navigationOptions: {
        title: "Cleaner Application"
      }  
    },
    NewOrder: {
      screen: NewOrderScreen, 
      navigationOptions: {
        title: "New Order"
      }  
    },
    CleanerProfile: {
      screen: CleanerProfileScreen,
      navigationOptions: {
        title: "Cleaner Profile"
      }  
    },
    CompletedOrders: {
      screen: CompletedOrdersScreen,
      navigationOptions: {
        title: "Completed Orders"
      }  
    },
    LiveOrders: {
      screen: LiveOrdersScreen,
      navigationOptions: {
        title: "Live Orders"
      }  
    },
    OrdersInArea: {
      screen: OrdersInAreaScreen,
      navigationOptions: {
        title: "Orders In Area"
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