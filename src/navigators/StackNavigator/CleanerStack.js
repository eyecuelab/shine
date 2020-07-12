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

const CleanerStack = createStackNavigator();

const CleanerStackNavigator = ({ cleaner, users }) => {
  const authentication = users.data ? users.data.included.length === 2 : null;
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
      {!authentication || cleaner.cleaner === null ? (
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
