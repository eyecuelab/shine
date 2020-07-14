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
  navigation,
  deleteCleanerWatcher,
}) => {
  const onDelete = () => {
    deleteCleanerWatcher();
  };

  return (
    <>
      <ProfileContainer>
        <Container>
          <Name>
            {cleaner.data ? cleaner.data.data.attributes.business_name : null}
          </Name>
        </Container>

        <ListItem>
          <Text>Account</Text>
          <Text>
            {cleaner.data ? cleaner.data.data.attributes.email : null}
          </Text>
        </ListItem>

        <ListItem onPress={() => navigation.navigate('Edit Profile')}>
          <Text>Edit Cleaner Profile</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem onPress={() => navigation.navigate('Orders In Area')}>
          <Text>New Orders In Area</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem onPress={() => navigation.navigate('Orders Requested')}>
          <Text>Orders with Quote Accepted</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem onPress={() => navigation.navigate('Orders In Progress')}>
          <Text>Orders In Progress</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem onPress={() => navigation.navigate('Completed Orders')}>
          <Text>Orders Completed</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <Seperator />
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
  height: 15px;
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
  cleaner: PropTypes.object,
  updateCleanerWatcher: PropTypes.func,
  deleteCleanerWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(CleanerProfileScreen);
