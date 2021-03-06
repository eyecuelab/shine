/* eslint-disable no-undef */
import * as React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import PriceTagWhite from '../../components/shared/PriceTagWhite';
import DashedLine from '../../components/shared/Dash';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import { formatDate } from '../../components/shared/FormatDate';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const { height: HEIGHT } = Dimensions.get('window');

const OrderStatusScreen = ({ order, orders }) => {
  const route = useRoute();
  const item = route.params;
  const imageUrl = item.attributes ? item.attributes.image_url : null;

  const cleaner =
    order && order.included ? order.included[order.included.length - 1] : null;
  const cleanerID = cleaner ? cleaner.id : null;
  const cleanerAddress =
    cleaner && cleaner.attributes
      ? cleaner.attributes.street_address +
        ' ' +
        cleaner.attributes.city +
        ', ' +
        cleaner.attributes.state +
        ' ' +
        cleaner.attributes.postal_code
      : null;

  const quote =
    order && cleanerID && order.included
      ? order.included.filter((item) =>
          item.attributes ? item.attributes.cleaner_id == cleanerID : null,
        )[0]
      : null;
  const quotedPrice =
    quote && quote.attributes ? quote.attributes.quoted_price : null;
  const deliveryBy =
    quote && quote.attributes ? formatDate(quote.attributes.delivery_by) : null;

  const orderID = order ? order.data.id : null;

  const currentOrder = orders
    ? orders.filter((item) => (item.attributes ? item.id == orderID : null))[0]
    : null;

  const currentOrderStatus =
    currentOrder && currentOrder.attributes ? currentOrder.attributes : null;

  return (
    <ScrollViewContailner>
      {ShoePhoto(imageUrl)}
      <TopContainer>
        <PriceTicketContainer>
          <PriceTicket
            source={require('../../../assets/images/price-ticket-beige.png')}
          />
          <PriceContianer>
            {quotedPrice ? PriceTagWhite(quotedPrice) : null}
            <DueText>Returned by {deliveryBy}</DueText>
          </PriceContianer>
        </PriceTicketContainer>
        <TextBox>Cleaner's Info</TextBox>
      </TopContainer>

      <MapContainer>
        <MapArea
          source={require('../../../assets/images/default-map.png')}
        ></MapArea>
        <CenterText>{cleanerAddress}</CenterText>
      </MapContainer>

      <InfoContainer>
        <TitelText>Business Name: </TitelText>
        <InfoText>
          {cleaner && cleaner.attributes
            ? cleaner.attributes.business_name
            : null}
        </InfoText>
        <TitelText>Email: </TitelText>
        <InfoText>
          {cleaner && cleaner.attributes ? cleaner.attributes.email : null}
        </InfoText>
        <TitelText>Phone: </TitelText>
        <InfoText>
          {cleaner && cleaner.attributes ? cleaner.attributes.phone : null}
        </InfoText>
        {cleaner && cleaner.attributes.bio ? (
          <>
            <TitelText>Bio: </TitelText>
            <InfoText>
              {cleaner && cleaner.attributes ? cleaner.attributes.bio : null}
            </InfoText>
          </>
        ) : null}
      </InfoContainer>

      <DashedLine />
      <TextBox>Order Status</TextBox>
      <BottomContainer>
        <SwitchTextContainer>
          <SwitchText>SHOES PICKED UP</SwitchText>
          <SwitchText>SHOES CLEANED</SwitchText>
          <SwitchText>SHOES POLISHED</SwitchText>
          <SwitchText>REQUEST PAYMENT</SwitchText>
          <SwitchText>SHOES DROPPED OFF</SwitchText>
        </SwitchTextContainer>
        <SwitchContainer>
          <AddOnSwitch
            disabled={true}
            switchState={
              currentOrderStatus ? currentOrderStatus.shoes_picked_up : null
            }
          />
          <AddOnSwitch
            disabled={true}
            switchState={
              currentOrderStatus ? currentOrderStatus.shoes_cleaned : null
            }
          />
          <AddOnSwitch
            disabled={true}
            switchState={
              currentOrderStatus ? currentOrderStatus.shoes_polished : null
            }
          />
          <AddOnSwitch
            disabled={true}
            switchState={
              currentOrderStatus ? currentOrderStatus.request_payment : null
            }
          />
          <AddOnSwitch
            disabled={true}
            switchState={
              currentOrderStatus ? currentOrderStatus.shoes_dropped_off : null
            }
          />
        </SwitchContainer>

        <DashedLine />
        <TextBox>Talk to cleaner!</TextBox>
        <MessageContainer>
          <TextContainer>
            <MessageText>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </MessageText>
          </TextContainer>
          <Profile source={require('../../../assets/images/profile-pic.png')} />
        </MessageContainer>

        <MessageContainer>
          <TextContainerBlack>
            <MessageText>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </MessageText>
          </TextContainerBlack>
          <Profile source={require('../../../assets/images/profile-pic.png')} />
        </MessageContainer>

        <TextInputContainer>
          <TextInput placeholder="ENTER MESSAGE HERE"></TextInput>
        </TextInputContainer>
      </BottomContainer>
    </ScrollViewContailner>
  );
};

const TopContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: ${HEIGHT / 2.2}px;
  margin-bottom: 50px;
  position: absolute;
`;

const MapContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

const BottomContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const PriceTicketContainer = styled.View`
  align-items: center;
  justify-content: space-between;
`;

const PriceTicket = styled.Image`
  margin: 20px;
  flex-wrap: wrap;
`;

const PriceContianer = styled.View`
  width: 220px;
  height: 130px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const DueText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  font-family: Marison-Sans-Round;
`;

const InfoContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
`;

const CenterText = styled.Text`
  font-family: Raleway-Bold;
  font-size: 16px;
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

const TextBox = styled.Text`
  font-family: Raleway-Bold;
  color: #8e1818;
  font-size: 22px;
  text-align: center;
  height: 60px;
  margin: 20px 20px 30px 20px;
  padding-top: 10px;
`;

const MapArea = styled.Image`
  margin-bottom: 20px;
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
  padding-top: 15px;
`;

const MessageContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

const Profile = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 1px;
  border-color: #e6e6e6;
  position: absolute;
`;

const TextContainer = styled.View`
  background-color: #cbb387;
  border-radius: 10px;
  padding: 50px 20px 20px 20px;
  margin: 40px;
`;

const TextContainerBlack = styled.View`
  background-color: #2c2c2c;
  border-radius: 10px;
  padding: 50px 20px 20px 20px;
  margin: 40px;
`;

const MessageText = styled.Text`
  color: white;
  font-size: 18px;
  text-align: left;
`;

const TextInputContainer = styled.View`
  width: 100%;
  margin-top: 30px;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background-color: #2c2c2c;
`;

const TextInput = styled.TextInput`
  height: 50px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  text-align: center;
`;

OrderStatusScreen.propTypes = {
  navigation: PropTypes.object,
  order: PropTypes.object,
  orderStatus: PropTypes.object,
  quoteAcceptWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    order: state.orders.selectedOrder,
    orderStatus: state.orders.orderStatus,
  };
};

export default connect(mapStateToProps, actions)(OrderStatusScreen);
