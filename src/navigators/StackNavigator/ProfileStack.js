import * as React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../screens/shared/SignInScreen';
import SignUpScreen from '../../screens/shared/SignUpScreen';
import ClientProfileScreen from '../../screens/client/ClientProfileScreen';
// import CleanerApplicationScreen from '../../screens/client/CleanerApplicationScreen';
// import AuthContext from '../../components/AuthContext';
import PropTypes from 'prop-types';

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = ({ users }) => {
  // const { authState } = React.useContext(AuthContext);
  // console.log('state', users.auth.token);

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
      <>
        <ProfileStack.Screen name="Sign up" component={SignUpScreen} />
        <ProfileStack.Screen name="Log in" component={SignInScreen} />
        <ProfileStack.Screen name="Profile" component={ClientProfileScreen} />
        {/* <ProfileStack.Screen
          name="CleanerApplication"
          component={CleanerApplicationScreen}
        /> */}
      </>

      {/* {
        (users.auth.token = null ? (
          <>
            <ProfileStack.Screen name="Sign up" component={SignUpScreen} />
            <ProfileStack.Screen name="Log in" component={SignInScreen} />
          </>
        ) : (
          <>
            <ProfileStack.Screen
              name="Profile"
              component={ClientProfileScreen}
            />
            <ProfileStack.Screen
              name="CleanerApplication"
              component={CleanerApplicationScreen}
            />
          </>
        ))
      } */}
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
