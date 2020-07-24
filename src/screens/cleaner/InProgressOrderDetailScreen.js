import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { Button } from 'react-native-elements';
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
  orderStatus,
  orders,
}) => {
  const item = route.params;
  const orderId = item.id;
  const currentOrderStatus = orders
    ? orders.filter((item) => item.id == orderId)[0].attributes
    : null;

  const [shoesPickedUp, setShoesPickedUp] = useState(
    !currentOrderStatus.shoes_picked_up
      ? false
      : currentOrderStatus.shoes_picked_up,
  );
  const [shoesCleaned, setShoesCleaned] = useState(
    !currentOrderStatus.shoes_cleaned
      ? false
      : currentOrderStatus.shoes_cleaned,
  );
  const [shoesPolished, setShoesPolished] = useState(
    !currentOrderStatus.shoes_polished
      ? false
      : currentOrderStatus.shoes_polished,
  );
  const [requestPayment, setRequestPayment] = useState(
    !currentOrderStatus.request_payment
      ? false
      : currentOrderStatus.request_payment,
  );
  const [shoesDroppedOff, setShoesDroppedOff] = useState(
    !currentOrderStatus.shoes_dropped_off
      ? false
      : currentOrderStatus.shoes_dropped_off,
  );

  // const statusMessage = shoesPickedUp
  //   ? shoesCleaned
  //     ? shoesPolished
  //       ? requestPayment
  //         ? shoesDroppedOff
  //           ? 'Completed Order Process'
  //           : 'Requested Payment to the client'
  //         : 'Sent message to the client "Shoe Polished"'
  //       : 'Sent message to the client "Shoe Cleaned"'
  //     : 'Sent message to the client "Shoe Picked Up"'
  //   : null;

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
      {ShoePhoto(item.attributes.image_url)}
      <Container>
        <InfoText>Order Id: {item.id}</InfoText>

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
    orderStatus: state.orders.orderStatus,
  };
};

export default connect(mapStateToProps, actions)(InProgressOrderDetailScreen);
