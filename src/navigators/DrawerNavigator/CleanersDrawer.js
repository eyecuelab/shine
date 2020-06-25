import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import SideBar from '../../components/shared/SideBar';
import { Feather } from '@expo/vector-icons';
import SettingsScreen from '../../screens/shared/SettingsScreen';
import WelcomeScreen from '../../screens/shared/WelcomeScreen';
import CleanerProfileScreen from '../../screens/cleaner/CleanerProfileScreen';
import CompletedOrdersScreen from '../../screens/cleaner/CompletedOrdersScreen';
import LiveOrdersScreen from '../../screens/cleaner/LiveOrdersScreen';
import OrdersInAreaScreen from '../../screens/cleaner/OrdersInAreaScreen';

const Drawer = createDrawerNavigator();

const CleanersDrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      hideStatusBar={true}
      drawerContent={(props) => <SideBar {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: '#CBB387',
        activeTintColor: 'rgb(99, 93, 58)',
        itemsContainerStyle: {
          marginTop: 16,
          marginHorizontal: 8,
        },
        itemStyle: {
          borderRadius: 4,
        },
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
            OrdersInArea: 'map-pin',
          };
          return (
            <Feather name={icons[route.name]} color={tintColor} size={16} />
          );
        },
      })}
    >
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen
        name="CleanerProfile"
        component={CleanerProfileScreen}
        options={{ title: 'Cleaner Profile' }}
      />
      <Drawer.Screen
        name="CompletedOrders"
        component={CompletedOrdersScreen}
        options={{ title: 'Completed Orders' }}
      />
      <Drawer.Screen
        name="LiveOrders"
        component={LiveOrdersScreen}
        options={{ title: 'Live Orders' }}
      />
      <Drawer.Screen
        name="OrdersInArea"
        component={OrdersInAreaScreen}
        options={{ title: 'Orders In Area' }}
      />
    </Drawer.Navigator>
  );
};

export default CleanersDrawerNavigator;
