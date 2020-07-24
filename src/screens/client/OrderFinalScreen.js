/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import PriceTagWhite from '../../components/shared/PriceTagWhite';
import DashedLine from '../../components/shared/Dash';
import UniversalButton from '../../components/shared/UniversalButton';
import { formatDate, expiresIn } from '../../components/shared/FormatDate';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const OrderFinalScreen = ({
  order,
  navigation,
  publishOrderWatcher,
  deleteOrderWatcher,
}) => {
  const route = useRoute();
  const item = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const currentDate = new Date();
  const orderID = item.id;
  const imageUrl = item.attributes.image_url;

  const handlePublish = () => {
    publishOrderWatcher({
      orderID: orderID,
      publishedAt: { published_at: currentDate },
    });
    setModalVisible(!modalVisible);
    navigation.navigate('Home');
  };

  const handleQuoteClick = (item) => {
    navigation.navigate('OrderConfirm', item);
  };

  const handleCancelClick = () => {
    deleteOrderWatcher(orderID);
    navigation.navigate('Home');
  };

  return (
    <ScrollViewContailner>
      {ShoePhoto(imageUrl)}
      <Container>
        {!item.attributes.published_at ? (
          <Text>Pulish your order to get quotes from cleaners!</Text>
        ) : order && order.included ? (
          <Text>You've recieved cleaning quotes!</Text>
        ) : (
          <Text>There are no cleaning quotes yet.</Text>
        )}

        {item.attributes.published_at ? null : (
          <>
            <DashedLine />
            <CenterText>Review your order</CenterText>
            <InfoContainer>
              <TitelText>Time Frame: </TitelText>
              <InfoText>{item.attributes.time_frame}</InfoText>
              <TitelText>Shoe Types: </TitelText>
              {item.attributes.shoe_types.map((i) => (
                <InfoText key={i}>
                  | {i.charAt(0) + i.slice(1).toLowerCase()}
                </InfoText>
              ))}
              <TitelText>Additional Services: </TitelText>
              {item.attributes.add_ons.polish ? (
                <InfoText>| Add Polish</InfoText>
              ) : null}
              {item.attributes.add_ons.replaceLaces ? (
                <InfoText>| Replace Shoelaces</InfoText>
              ) : null}
              {item.attributes.add_ons.rainProtection ? (
                <InfoText>| Add Rain Protection</InfoText>
              ) : null}

              <TitelText>Note: </TitelText>
              <InfoText>{item.attributes.note}</InfoText>
              <TitelText>Pickup Address: </TitelText>
              <InfoText>
                {item.attributes.street_address} {item.attributes.city}{' '}
                {item.attributes.state} {', '} {item.attributes.postal_code}
              </InfoText>
              <TitelText>Estimated Price: </TitelText>
              <InfoText>$ {item.attributes.estimated_price}</InfoText>
            </InfoContainer>
            <UniversalButton
              title={'PUBLISH'}
              width={275}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </>
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
                <RedText>PUBLISH</RedText>
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

        {order &&
          order.included &&
          order.included.map((i) => (
            <QuoteContainer key={i.id} onPress={() => handleQuoteClick(i)}>
              <PriceTicketContainer>
                <PriceTicket
                  source={require('../../../assets/images/price-ticket-black.png')}
                />
                <PriceContianer>
                  {i.attributes.quoted_price
                    ? PriceTagWhite(i.attributes.quoted_price)
                    : null}
                  <DueText>
                    Returned by{' '}
                    {i.attributes.delivery_by
                      ? formatDate(i.attributes.delivery_by)
                      : null}
                  </DueText>
                </PriceContianer>
                <ExpireText>
                  Expires in{' '}
                  {i.attributes.expires_at
                    ? expiresIn(i.attributes.expires_at)
                    : null}
                </ExpireText>
              </PriceTicketContainer>
            </QuoteContainer>
          ))}

        <DashedLine />

        <UniversalButton
          title={'CANCEL SERVICE'}
          width={275}
          onPress={() => setCancelModalVisible(!cancelModalVisible)}
        />
        <Modal
          animationType="slide"
          transparent={true}
          backdropOpacity={0.3}
          visible={cancelModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <ModalContainer>
            <ModalView>
              <ModalText>
                Are you sure that you want to permanently delete this order?
              </ModalText>
              <ModalItem onPress={handleCancelClick}>
                <RedText>DELETE</RedText>
              </ModalItem>
              <ModalItem
                onPress={() => {
                  setCancelModalVisible(!cancelModalVisible);
                }}
              >
                <BlueText>CANCEL</BlueText>
              </ModalItem>
            </ModalView>
          </ModalContainer>
        </Modal>
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
  font-family: Raleway-Medium;
  font-size: 18px;
  font-weight: 500;
  margin: 10px;
  padding-bottom: 20px;
  text-align: center;
`;

const RedText = styled.Text`
  font-family: Raleway-Medium;
  font-size: 18px;
  font-weight: 800;
  margin-right: 10px;
  color: #8e1818;
`;

const BlueText = styled.Text`
  font-family: Raleway-Medium;
  font-size: 18px;
  font-weight: 800;
  margin-right: 10px;
  color: #3483eb;
`;

const Text = styled.Text`
  font-family: Raleway-Medium;
  margin-top: 10px;
  padding-bottom: 10px;
  color: #42413c;
  font-size: 16px;
`;

const InfoContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  width: 85%;
`;

const CenterText = styled.Text`
  font-family: Raleway-Bold;
  font-size: 22px;
  color: #8e1818;
`;

const TitelText = styled.Text`
  font-family: Raleway-Bold;
  font-size: 18px;
  margin-vertical: 10px;
`;

const InfoText = styled.Text`
  font-family: Raleway-Medium;
  font-size: 16px;
  margin-bottom: 5px;
  margin-left: 20px;
`;

const QuoteContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PriceTicketContainer = styled.View`
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
  font-family: Marison-Sans-Round;
`;

const ExpireText = styled.Text`
  color: #939393;
  font-size: 18px;
  font-family: Marison-Sans-Round;
  text-align: center;
`;

OrderFinalScreen.propTypes = {
  navigation: PropTypes.object,
  order: PropTypes.object,
  deleteOrderWatcher: PropTypes.func,
  publishOrderWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { order: state.orders.selectedOrder };
};

export default connect(mapStateToProps, actions)(OrderFinalScreen);
