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
          backgroundColor: 'white',
          borderBottomColor: 'white',
          shadowColor: 'white',
        },
        headerTintColor: 'black',
        headerBackTitleVisible: false,
      }}
    >
      {authentication === null ? (
        <>
          <ProfileStack.Screen name="Welcome" component={WelcomeScreen} />
          <ProfileStack.Screen name="SignUp" component={SignUpScreen} />
          <ProfileStack.Screen name="LogIn" component={SignInScreen} />
        </>
      ) : (
        <>
          <ProfileStack.Screen name="Profile" component={ClientProfileScreen} />
          <ProfileStack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
          />
          <ProfileStack.Screen
            name="EditProfile"
            component={EditProfileScreen}
          />
          <ProfileStack.Screen
            name="Cleaner Application"
            component={CleanerApplicationScreen}
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
