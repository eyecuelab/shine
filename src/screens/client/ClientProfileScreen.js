/* eslint-disable no-undef */
import * as React from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const { height: HEIGHT } = Dimensions.get('window');

const ClientProfileScreen = ({ user, navigation, logoutWatcher }) => {
  // const navigation = useNavigation();
  const onSubmit = () => {
    logoutWatcher();
  };

  const profilePhoto = user ? user.image_url : '';

  const ProfilePhotoDisplay = () => {
    if (
      profilePhoto === '' ||
      profilePhoto === null ||
      profilePhoto === undefined
    ) {
      return (
        <Profile source={require('../../../assets/images/profile-pic.png')} />
      );
    } else {
      return <Profile source={{ uri: profilePhoto }} />;
    }
  };

  return (
    <>
      <ProfileContainer>
        <ProfileBackground>
          <Container>
            <ProfilePhotoDisplay />
            <Name>{user ? user.first_name + ' ' + user.last_name : null}</Name>
          </Container>
        </ProfileBackground>

        <ListItem>
          <Text>Account</Text>
          <EmailText>{user ? user.email : null}</EmailText>
        </ListItem>

        <ListItem onPress={() => navigation.navigate('Change Password')}>
          <Text>Change Password</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem onPress={() => navigation.navigate('Edit Profile')}>
          <Text>Edit Profile</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem>
          <Text>Payment</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem>
          <Text>Notification</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>
        {/* not sure if the API has this DELETE functionality */}
        {/* <ListItem>
          <Text>Delete Your Account</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem> */}
        <Seperator />
        {/* <ListItemCenter
          onPress={() => navigation.navigate('Cleaner Application')}
        >
          <CenterText>Become a Cleaner</CenterText>
        </ListItemCenter> */}

        <ListItemCenter onPress={onSubmit}>
          <CenterText>Log Out</CenterText>
        </ListItemCenter>
      </ProfileContainer>
    </>
  );
};

const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  margin-top: 20px;
`;

const ProfileBackground = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 20px;
  position: relative;
`;

const Profile = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-width: 3px;
  border-color: #cbb387;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Name = styled.Text`
  color: #4a4a4a;
  font-size: 20px;
  font-weight: 800;
  margin-vertical: 8px;
  font-family: Marison-Sans-Round;
`;

const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
  padding-horizontal: 25px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const ListItemCenter = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
  padding-horizontal: 25px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Seperator = styled.View`
  width: 100%;
  height: 15px;
  background-color: #e6e6e6;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
`;

const Text = styled.Text`
  font-family: Raleway-Bold;
  color: #4a4a4a;
  font-size: 16px;
`;

const EmailText = styled.Text`
  font-family: Raleway-Medium;
  color: #4a4a4a;
  font-size: 16px;
`;

const CenterText = styled.Text`
  color: #cbb387;
  font-family: Raleway-Bold;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;

ClientProfileScreen.propTypes = {
  navigation: PropTypes.object,
  user: PropTypes.object,
  logoutWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.users.data
      ? state.users.data.included[0].attributes
      : state.users.data,
    users: state.users,
  };
};

export default connect(mapStateToProps, actions)(ClientProfileScreen);
