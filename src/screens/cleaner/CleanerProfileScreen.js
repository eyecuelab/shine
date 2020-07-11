import * as React from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const CleanerProfileScreen = ({
  cleaner,
  users,
  navigation,
  deleteCleanerWatcher,
}) => {
  const profile = cleaner.data.attributes;
  // console.log('C', profile);
  // console.log('U', users);

  const onDelete = () => {
    deleteCleanerWatcher();
  };

  return (
    <>
      <ProfileContainer>
        <Container>
          <Name>{profile.business_name}</Name>
        </Container>

        <ListItem>
          <Text>Account</Text>
          <Text>{profile.email}</Text>
        </ListItem>

        <ListItemCenter onPress={onDelete}>
          <CenterText>Delete Cleaner's Account</CenterText>
        </ListItemCenter>
      </ProfileContainer>
    </>
  );
};

const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const Container = styled.View`
  background-color: #e3d4ba;
  width: 100%;
  height: ${HEIGHT / 8}px;
  align-items: center;
  justify-content: center;
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

CleanerProfileScreen.propTypes = {
  navigation: PropTypes.object,
  users: PropTypes.object,
  cleaner: PropTypes.object,
  updateCleanerWatcher: PropTypes.func,
  deleteCleanerWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { users: state.users, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(CleanerProfileScreen);
