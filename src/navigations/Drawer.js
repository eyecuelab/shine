import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import SideBar from "../components/SideBar";
import {
  HomeScreen,
  LogInScreen,
  SettingsScreen,
  WelcomeScreen,
  CleanerApplicationScreen,
  NewOrderScreen,
  CleanerProfileScreen,
  CompletedOrdersScreen,
  LiveOrdersScreen,
  OrdersInAreaScreen
} from "../screens";

// screens
// import CleanerApplicationScreen from "../screens/client/CleanerApplicationScreen";
// import NewOrderScreen from "../screens/client/NewOrderScreen";

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
        title: "Client Application"
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