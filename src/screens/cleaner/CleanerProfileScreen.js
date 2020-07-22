import * as React from 'react';
import { Modal } from 'react-native';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const { height: HEIGHT } = Dimensions.get('window');

const CleanerProfileScreen = ({
  cleaner,
  navigation,
  deleteCleanerWatcher,
  loadQuotableOrdersWatcher,
  loadQuotedOrderWatcher,
}) => {
  const businessName = cleaner.data
    ? cleaner.data.attributes.business_name
    : null;
  const email = cleaner.data ? cleaner.data.attributes.email : null;
  const [modalVisible, setModalVisible] = React.useState(false);

  const onLoadQuotableOrders = () => {
    loadQuotableOrdersWatcher();
    navigation.navigate('Orders In Area');
  };

  const onLoadQuotedOrders = () => {
    loadQuotedOrderWatcher();
    navigation.navigate('Orders In Progress');
  };

  const onDelete = () => {
    deleteCleanerWatcher();
  };

  return (
    <>
      <ProfileContainer>
        <Container>
          <Name>{businessName}</Name>
        </Container>

        <ListItem>
          <Text>Account</Text>
          <Text>{email}</Text>
        </ListItem>

        <ListItem onPress={() => navigation.navigate('Edit Profile')}>
          <Text>Edit Cleaner Profile</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem onPress={onLoadQuotableOrders}>
          <Text>Quotable Orders In Area</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem onPress={onLoadQuotedOrders}>
          <Text>Orders In Progress</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <ListItem onPress={() => navigation.navigate('Completed Orders')}>
          <Text>Orders Completed</Text>
          <Feather name="chevron-right" size={24} color="#737272" />
        </ListItem>

        <Seperator />
        <ListItemCenter
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <CenterText>Delete Your Cleaner Account</CenterText>
        </ListItemCenter>
        <Modal
          animationType="slide"
          transparent={true}
          backdropOpacity={0.3}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <ModalContainer>
            <ModalView>
              <ModalText>
                Are you sure that you want to permanently delete this cleaner
                account?
              </ModalText>
              <ModalItem onPress={onDelete}>
                <RedText>DELETE</RedText>
              </ModalItem>
              <ModalItem
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <BlueText>CANCEL</BlueText>
              </ModalItem>
            </ModalView>
          </ModalContainer>
        </Modal>
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

// const Profile = styled.Image`
//   width: 80px;
//   height: 80px;
//   border-radius: 40px;
//   border-width: 3px;
//   border-color: #cbb387;
//   margin-bottom: 20px;
// `;

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

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const ModalView = styled.View`
  margin: 20px;
  background-color: #e6e6e6;
  border-radius: 20px;
  padding: 30px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-opacity: 0.25;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ModalItem = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #e6e6e6;
  padding-top: 20px;
  border-top-width: 1px;
  border-top-color: #939393;
`;

const ModalText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
  padding-bottom: 20px;
  text-align: center;
`;

const RedText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  color: #8e1818;
`;

const BlueText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  color: #3483eb;
`;

CleanerProfileScreen.propTypes = {
  navigation: PropTypes.object,
  cleaner: PropTypes.object,
  updateCleanerWatcher: PropTypes.func,
  deleteCleanerWatcher: PropTypes.func,
  loadQuotableOrdersWatcher: PropTypes.func,
  loadQuotedOrderWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { users: state.users, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(CleanerProfileScreen);
