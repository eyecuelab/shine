import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import SideBar from "../components/SideBar";
import {
  CleanerApplicationScreen,
  NewOrderScreen,
  CleanerProfileScreen,
  CompletedOrderScreen,
  LiveOrdersScreen,
  OrdersInAreaScreen
} from "../screens";

// screens
// import CleanerApplicationScreen from "../screens/client/CleanerApplicationScreen";
// import NewOrderScreen from "../screens/client/NewOrderScreen";

// drawer navigation options
const DrawerNavigator = createDrawerNavigator(
  {
    CleanerApplicationScreen: {
      screen: CleanerApplicationScreen
    },
    NewOrderScreen: {
      screen: NewOrderScreen
    },
    CleanerProfileScreen: {
      screen: CleanerProfileScreen
    },
    CompletedOrderScreen: {
      screen: CompletedOrderScreen
    },
    LiveOrdersScreen: {
      screen: LiveOrdersScreen
    },
    OrdersInAreaScreen: {
      screen: OrdersInAreaScreen
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