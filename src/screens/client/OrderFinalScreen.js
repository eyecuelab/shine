/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import { formatDate } from '../../components/shared/FormatDate';
import PriceTagWhite from '../../components/shared/PriceTagWhite';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const OrderFinalScreen = ({ navigation, publishOrderWatcher }) => {
  const route = useRoute();
  const item = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const currentDate = formatDate(new Date());

  const handlePublish = () => {
    const orderID = item.id;
    console.log(orderID);
    publishOrderWatcher({
      orderID: orderID,
      publishedAt: { published_at: currentDate },
    });
  };

  const handleSubmit = () => {
    navigation.navigate('OrderConfrim', item);
  };

  // const handleCancelClick = () => {
  //   deleteOrder(item.uuid);
  //   navigation.navigate('Home');
  // };

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.attributes.image_url)}
      <Container>
        <Text>You've recieved cleaning quotes!</Text>
        <SwitchTextContainer>
          <SwitchText>ADD POLISH</SwitchText>
          <SwitchText>ADD RAIN PROTECTION</SwitchText>
          <SwitchText>REPLACE SHOELACES</SwitchText>
        </SwitchTextContainer>
        <SwitchContainer>
          <AddOnSwitch
            disabled={true}
            switchState={item.attributes.add_ons.polish}
          />
          <AddOnSwitch
            disabled={true}
            switchState={item.attributes.add_ons.rainProtection}
          />
          <AddOnSwitch
            disabled={true}
            switchState={item.attributes.add_ons.replaceLaces}
          />
        </SwitchContainer>

        {item.attributes.published_at ? null : (
          <Button
            title="PUBLISH"
            containerStyle={{ paddingVertical: 40, width: 350 }}
            buttonStyle={{
              backgroundColor: '#939393',
              height: 50,
              borderRadius: 7,
            }}
            onPress={() => setModalVisible(!modalVisible)}
          />
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <ModalContainer>
            <ModalView>
              <ModalText>Would you like to publish this order?</ModalText>
              <ModalItem onPress={handlePublish}>
                <RedText>Publish</RedText>
              </ModalItem>
              <ModalItem
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <BlueText>Cancel</BlueText>
              </ModalItem>
            </ModalView>
          </ModalContainer>
        </Modal>

        {/* ========== NEED TO REFACTOR BELOW THIS CODE
                 ADD CLEANER'S STATE INTO PRICE TICKET ============ */}
        {/* <BidsContainer>
          <PriceTicketContainer onPress={handleSubmit}>
            <PriceTicket
              source={require('../../../assets/images/price-ticket-black.png')}
            />
            <PriceContianer>
              {PriceTagWhite(34, 99)}
              <DueText>RETURNED BY THURSDAY</DueText>
            </PriceContianer>
            <ExpireText>Expires in 12HR</ExpireText>
          </PriceTicketContainer>
        </BidsContainer> */}
        {/* ============================================================= */}
        {/* <Button
          title="CANCEL SERVICE"
          containerStyle={{ paddingVertical: 40, width: 350 }}
          buttonStyle={{
            backgroundColor: '#939393',
            height: 50,
            borderRadius: 7,
          }}
          onPress={handleCancelClick}
        /> */}
      </Container>
    </ScrollViewContailner>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
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
  font-weight: 600;
  margin: 20px;
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

const Text = styled.Text`
  margin-top: 10px;
  padding-bottom: 10px;
  color: #42413c;
  font-size: 18px;
`;

const SwitchTextContainer = styled.View`
  margin-right: 90px;
`;

const SwitchText = styled.Text`
  text-align: left;
  margin: 15px 0px 0px 20px;
  color: black;
  font-size: 18px;
`;

const SwitchContainer = styled.View`
  margin-top: 40px;
  padding-top: 10px;
`;

const BidsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PriceTicketContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const PriceTicket = styled.Image`
  margin: 30px;
  flex-wrap: wrap;
`;

const PriceContianer = styled.View`
  flex-wrap: wrap;
  width: 200px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const DueText = styled.Text`
  color: #e6e6e6;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

const ExpireText = styled.Text`
  color: #939393;
  font-size: 18px;
  font-family: Marison-Sans-Round;
  text-align: center;
`;

OrderFinalScreen.propTypes = {
  navigation: PropTypes.object,
  requestComplete: PropTypes.func,
  deleteOrder: PropTypes.func,
  orders: PropTypes.array,
  publishOrderWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrderFinalScreen);
