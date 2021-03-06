import * as React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
// SCREEN IMPORTS:
import CleanerOptionScreen from '../../screens/cleaner/CleanerOptionScreen';
import SignInScreen from '../../screens/shared/SignInScreen';
import CleanerApplicationScreen from '../../screens/cleaner/CleanerApplicationScreen';
import CleanerProfileScreen from '../../screens/cleaner/CleanerProfileScreen';
import EditCleanerProfileScreen from '../../screens/cleaner/EditCleanerProfileScreen';
import OrdersInProgressScreen from '../../screens/cleaner/OrdersInProgressScreen';
import CompletedOrdersScreen from '../../screens/cleaner/CompletedOrdersScreen';
import OrdersInAreaScreen from '../../screens/cleaner/OrdersInAreaScreen';
import QuotableOrderDetailScreen from '../../screens/cleaner/QuotableOrderDetailScreen';
import InProgressOrderDetailScreen from '../../screens/cleaner/InProgressOrderDetailScreen';

const CleanerStack = createStackNavigator();

const CleanerStackNavigator = ({ cleaner, users }) => {
  const authentication = users.status !== 'Logged out' ? true : false;
  const cleanerAccontExist = cleaner.data ? true : false;

  return (
    <CleanerStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#CBB387',
          borderBottomColor: '#CBB387',
          shadowColor: '#CBB387',
        },
        headerTitleStyle: {
          fontFamily: 'Marison-Sans-Round',
        },
        headerTintColor: '#FFFFFF',
        headerBackTitleVisible: false,
      }}
    >
      {!authentication || !cleanerAccontExist ? (
        <>
          <CleanerStack.Screen
            name="Cleaner Option Screen"
            component={CleanerOptionScreen}
            options={{ title: 'CLEANER' }}
          />
          <CleanerStack.Screen
            name="Cleaner Application"
            component={CleanerApplicationScreen}
            options={{ title: 'BECOME A CLEANER' }}
          />
          <CleanerStack.Screen name="Log in" component={SignInScreen} />
        </>
      ) : (
        <>
          <CleanerStack.Screen
            name="Cleaner Profile"
            component={CleanerProfileScreen}
            options={{ title: 'CLEANER PROFILE' }}
          />
          <CleanerStack.Screen
            name="Edit Profile"
            component={EditCleanerProfileScreen}
            options={{ title: 'EDIT PROFILE' }}
          />
          <CleanerStack.Screen
            name="Orders In Area"
            component={OrdersInAreaScreen}
            options={{ title: 'ORDERS IN AREA' }}
          />
          <CleanerStack.Screen
            name="Quotable Order Detail"
            component={QuotableOrderDetailScreen}
            options={{ title: 'ORDER DETAIL' }}
          />
          <CleanerStack.Screen
            name="Orders In Progress"
            component={OrdersInProgressScreen}
            options={{ title: 'ORDERS IN PROGRESS' }}
          />
          <CleanerStack.Screen
            name="In Pogress Order Detail"
            component={InProgressOrderDetailScreen}
            options={{ title: 'UPDATE ORDER STATUS' }}
          />
          <CleanerStack.Screen
            name="Completed Orders"
            component={CompletedOrdersScreen}
            options={{ title: 'COMPLETED ORDERS' }}
          />
        </>
      )}
    </CleanerStack.Navigator>
  );
};

CleanerStackNavigator.propTypes = {
  cleaner: PropTypes.object,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { cleaner: state.cleaner, users: state.users };
};

export default connect(mapStateToProps)(CleanerStackNavigator);
