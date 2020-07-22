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
import AcceptedQuotesScreen from '../../screens/cleaner/AcceptedQuotesScreen';
import OrdersInProgressScreen from '../../screens/cleaner/OrdersInProgressScreen';
import CompletedOrdersScreen from '../../screens/cleaner/CompletedOrdersScreen';
import OrdersInAreaScreen from '../../screens/cleaner/OrdersInAreaScreen';
import QuotableOrderDetailScreen from '../../screens/cleaner/QuotableOrderDetailScreen';
import QuotedOrderDetailScreen from '../../screens/cleaner/QuotedOrderDetailScreen';

const CleanerStack = createStackNavigator();

const CleanerStackNavigator = ({ cleaner, users }) => {
  const authentication = users.status !== 'Logged out' ? true : false;
  const cleanerAccontExist = cleaner.data ? true : false;
  // const cleanerAccontExist =
  //   Object.keys(users.cleaner).length === 0 ? false : true;

  return (
    <CleanerStack.Navigator
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
      {!authentication || !cleanerAccontExist ? (
        <>
          <CleanerStack.Screen
            name="Cleaner Option Screen"
            component={CleanerOptionScreen}
            options={{ title: 'SHINE' }}
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
            name="Accepted Quotes"
            component={AcceptedQuotesScreen}
            options={{ title: 'ACCEPTED QUOTES' }}
          />
          <CleanerStack.Screen
            name="Quoted Order Detail"
            component={QuotedOrderDetailScreen}
            options={{ title: 'UPDATE ORDER STATUS' }}
          />
          <CleanerStack.Screen
            name="Orders In Progress"
            component={OrdersInProgressScreen}
            options={{ title: 'ORDERS IN PROGRESS' }}
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
