import * as React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
// SCREEN IMPORTS:
import CleanerOptionScreen from '../../screens/cleaner/CleanerOptionScreen';
import SignInScreen from '../../screens/shared/SignInScreen';
import CleanerApplicationScreen from '../../screens/cleaner/CleanerApplicationScreen';
import CleanerProfileScreen from '../../screens/cleaner/CleanerProfileScreen';
import PropTypes from 'prop-types';

const CleanerStack = createStackNavigator();

const CleanerStackNavigator = ({ cleaner, users }) => {
  console.log('STATE', cleaner);
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
      {cleaner !== null && users.status === 'Logged in' ? (
        <>
          <CleanerStack.Screen
            name="Cleaner Profile"
            component={CleanerProfileScreen}
            options={{ title: 'CLEANER PROFILE' }}
          />
          <CleanerStack.Screen
            name="Cleaner Option Screen"
            component={CleanerOptionScreen}
            options={{ title: 'SHINE' }}
          />
        </>
      ) : (
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
