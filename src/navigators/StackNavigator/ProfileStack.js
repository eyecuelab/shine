import * as React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
// SCREEN IMPORTS:
import WelcomeScreen from '../../screens/shared/WelcomeScreen';
import SignInScreen from '../../screens/shared/SignInScreen';
import SignUpScreen from '../../screens/shared/SignUpScreen';
import ClientProfileScreen from '../../screens/client/ClientProfileScreen';
import ChangePasswordScreen from '../../screens/shared/ChangePasswordScreen';
import EditProfileScreen from '../../screens/shared/EditProfileScreen';
import CleanerApplicationScreen from '../../screens/cleaner/CleanerApplicationScreen';
import PropTypes from 'prop-types';

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = ({ users }) => {
  const authentication = users.auth.token;

  return (
    <ProfileStack.Navigator
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
      {authentication === null ? (
        <>
          <ProfileStack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ title: 'SHINE' }}
          />
          <ProfileStack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ title: 'SIGN UP' }}
          />
          <ProfileStack.Screen
            name="LogIn"
            component={SignInScreen}
            options={{ title: 'LOG IN' }}
          />
        </>
      ) : (
        <>
          <ProfileStack.Screen
            name="Profile"
            component={ClientProfileScreen}
            options={{ title: 'PROFILE' }}
          />
          <ProfileStack.Screen
            name="Change Password"
            component={ChangePasswordScreen}
            options={{ title: '' }}
          />
          <ProfileStack.Screen
            name="Edit Profile"
            component={EditProfileScreen}
            options={{ title: '' }}
          />
          <ProfileStack.Screen
            name="Cleaner Application"
            component={CleanerApplicationScreen}
            options={{ title: 'BECOME A CLEANER' }}
          />
        </>
      )}
    </ProfileStack.Navigator>
  );
};

ProfileStackNavigator.propTypes = {
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(ProfileStackNavigator);
