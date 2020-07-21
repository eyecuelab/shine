import React from 'react';
// import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';
// import { Feather } from '@expo/vector-icons';
// SCREEN IMPORTS:
import HomeScreen from '../../screens/shared/HomeScreen';
import NewOrderScreen from '../../screens/client/NewOrderScreen';
import OrderDetailScreen from '../../screens/client/OrderDetailScreen';
import OrderFinalScreen from '../../screens/client/OrderFinalScreen';
import OrderStatusScreen from '../../screens/client/OrderStatusScreen';
import OrderConfrimScreen from '../../screens/client/OrderConfirmScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  // const navigation = useNavigation();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#CBB387',
          borderBottomColor: '#CBB387',
          shadowColor: '#CBB387',
        },
        headerTintColor: '#FFFFFF',
        headerBackTitleVisible: false,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          // eslint-disable-next-line react/display-name
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('NewOrder')}
          //     title="NEW ORDER"
          //     color="#fff"
          //   />
          // ),
        }}
      />
      <HomeStack.Screen
        name="NewOrder"
        component={NewOrderScreen}
        options={{ title: 'NEW ORDER' }}
      />
      <HomeStack.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{ title: '' }}
      />
      <HomeStack.Screen
        name="OrderFinal"
        component={OrderFinalScreen}
        options={{ title: 'QUOTES FROM CLEANERS' }}
      />
      <HomeStack.Screen
        name="OrderConfrim"
        component={OrderConfrimScreen}
        options={{ title: 'QUOTE DETAILS' }}
      />
      <HomeStack.Screen
        name="OrderStatus"
        component={OrderStatusScreen}
        options={{ title: 'ORDER STATUS' }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
