import * as React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import AuthContext from '../../components/AuthContext';
import { Feather } from '@expo/vector-icons';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const ClientProfileScreen = ({ navigation }) => {
  const { authState, authContext } = React.useContext(AuthContext);

  return (
    <>
      <ProfileContainer>
        <ImageBackground
          source={require('../../../assets/images/profile-bg.png')}
        >
          <Container>
            <Profile
              source={require('../../../assets/images/profile-pic.png')}
            />
            <Name>{authState.userName}</Name>
          </Container>
        </ImageBackground>

        <ListItem>
          <Text>Account</Text>
          <Text>{authState.userEmail}</Text>
        </ListItem>

        <ListItem>
          <Text>Change Password</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem>
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
        <Seperator />
        <ListItemCenter
          onPress={() => navigation.navigate('CleanerApplication')}
        >
          <CenterText>Become a Cleaner</CenterText>
        </ListItemCenter>

        <ListItemCenter onPress={() => authContext.signOut()}>
          <CenterText>Log Out</CenterText>
        </ListItemCenter>
      </ProfileContainer>
    </>
  );
};

const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ImageBackground = styled.View`
  background-color: #e6e6e6;
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 30px;
  position: relative;
`;

const Profile = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 3px;
  border-color: #cbb387;
  margin-bottom: 20px;
`;

const Name = styled.Text`
  color: #2c2c2c;
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
`;

const Seperator = styled.View`
  width: 100%;
  height: 20px;
  background-color: #e6e6e6;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
`;

const Text = styled.Text`
  color: #737272;
  font-size: 16px;
`;

const CenterText = styled.Text`
  color: #cbb387;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;

ClientProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ClientProfileScreen;

// border: 1px solid black;
