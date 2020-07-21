import React, { useState } from 'react';
import { Platform, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import DashedLine from '../../components/shared/Dash';
import PriceTagBlack from '../../components/shared/PriceTagBlack';
import { formatDate, formatDateTime } from '../../components/shared/FormatDate';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const QuotedOrderDetailScreen = ({ route, updateOrderWatcher }) => {
  const item = route.params;
  //console.log(item);

  const onSubmit = () => {
    updateOrderWatcher({
      orderID: 14,
      payload: {
        shoes_picked_up: true,
        shoes_cleaned: true,
        shoes_polished: true,
        request_payment: false,
        shoes_dropped_off: false,
      },
    });
  };

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.attributes.image_url)}
      <Container>
        <InfoText>Order Id: {item.id}</InfoText>
        <Button
          title="SUBMIT"
          containerStyle={{ paddingTop: 10, width: 330 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={onSubmit}
        />
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
  font-size: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
`;

QuotedOrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  orders: PropTypes.array,
  cleaner: PropTypes.object,
  updateOrderWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { orders: state.orders.orders, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(QuotedOrderDetailScreen);
