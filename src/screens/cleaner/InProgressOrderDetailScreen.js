import React, { useState } from 'react';
import { connect } from 'react-redux';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';
import UniversalButton from '../../components/shared/UniversalButton';

const InProgressOrderDetailScreen = ({
  route,
  updateOrderWatcher,
  quoteInfo,
  orders,
  cleaner,
}) => {
  const item = route.params;
  const orderId = item.id;
  const imageUrl = item.attributes ? item.attributes.image_url : null;
  const currentOrderStatus = cleaner.inProgressOrders
    ? cleaner.inProgressOrders[orderId].data.attributes
    : null;

  const crrShoesPickedUp = currentOrderStatus
    ? currentOrderStatus.shoes_picked_up
    : false;
  const crrShoesCleaned = currentOrderStatus
    ? currentOrderStatus.shoes_cleaned
    : false;
  const crrShoesPolished = currentOrderStatus
    ? currentOrderStatus.shoes_polished
    : false;
  const crrRequestPayment = currentOrderStatus
    ? currentOrderStatus.request_payment
    : false;
  const crrShoesDroppedOff = currentOrderStatus
    ? currentOrderStatus.shoes_dropped_off
    : false;

  const [shoesPickedUp, setShoesPickedUp] = useState(crrShoesPickedUp);
  const [shoesCleaned, setShoesCleaned] = useState(crrShoesCleaned);
  const [shoesPolished, setShoesPolished] = useState(crrShoesPolished);
  const [requestPayment, setRequestPayment] = useState(crrRequestPayment);
  const [shoesDroppedOff, setShoesDroppedOff] = useState(crrShoesDroppedOff);

  const onSubmit = () => {
    updateOrderWatcher({
      orderID: item.id,
      payload: {
        shoes_picked_up: shoesPickedUp,
        shoes_cleaned: shoesCleaned,
        shoes_polished: shoesPolished,
        request_payment: requestPayment,
        shoes_dropped_off: shoesDroppedOff,
      },
    });
  };

  return (
    <ScrollViewContailner>
      {ShoePhoto(imageUrl)}
      <Container>
        <InfoText>Order Id: {orderId}</InfoText>

        <SwitchTextContainer>
          <SwitchText>SHOES PICKED UP</SwitchText>
          <SwitchText>SHOES CLEANED</SwitchText>
          <SwitchText>SHOES POLISHED</SwitchText>
          <SwitchText>REQUEST PAYMENT</SwitchText>
          <SwitchText>SHOES DROPPED OFF</SwitchText>
        </SwitchTextContainer>
        <SwitchContainer>
          <AddOnSwitch
            disabled={false}
            switchState={shoesPickedUp}
            setSwitchState={setShoesPickedUp}
          />
          <AddOnSwitch
            disabled={false}
            switchState={shoesCleaned}
            setSwitchState={setShoesCleaned}
          />
          <AddOnSwitch
            disabled={false}
            switchState={shoesPolished}
            setSwitchState={setShoesPolished}
          />
          <AddOnSwitch
            disabled={false}
            switchState={requestPayment}
            setSwitchState={setRequestPayment}
          />
          <AddOnSwitch
            disabled={false}
            switchState={shoesDroppedOff}
            setSwitchState={setShoesDroppedOff}
          />
        </SwitchContainer>
        {/* <StatusText>{statusMessage}</StatusText> */}

        <UniversalButton title={'SUMBIT'} width={275} onPress={onSubmit} />
      </Container>
    </ScrollViewContailner>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const InfoText = styled.Text`
  font-family: Raleway-Medium;
  font-size: 20px;
  text-align: center;
`;

// const StatusText = styled.Text`
//   font-family: Raleway-Medium;
//   font-size: 18px;
//   margin: 30px;
//   padding-horizontal: 20px;
//   text-align: center;
//   color: #8e1818;
// `;

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

InProgressOrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  orders: PropTypes.array,
  cleaner: PropTypes.object,
  updateOrderWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    cleaner: state.cleaner,
    quoteInfo: state.cleaner.quoteInfo,
  };
};

export default connect(mapStateToProps, actions)(InProgressOrderDetailScreen);
