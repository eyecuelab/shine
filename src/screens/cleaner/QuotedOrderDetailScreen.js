import React, { useState } from 'react';
import { Platform, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button } from 'react-native-elements';
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

const QuotedOrderDetailScreen = ({
  route,
  addQuoteWatcher,
  cleaner,
  navigation,
}) => {
  const item = route.params;
  console.log(item);

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.attributes.image_url)}
      <InfoText>Order Id: {item.id}</InfoText>
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

const TitleText = styled.Text`
  font-size: 22px;
  font-weight: 600;
  margin: 0px 40px 50px 40px;
  padding: 15px;
  text-align: center;
  background-color: #cbb387;
`;

const ListText = styled.Text`
  font-size: 20px;
  color: #939393;
  font-weight: 700;
  margin-bottom: 20px;
  margin-left: 12px;
`;

const DateText = styled.Text`
  font-size: 18px;
  color: #bababa;
  font-weight: 700;
  margin-bottom: 20px;
  margin-left: 12px;
`;

const DatePickerText = styled.Text`
  font-size: 18px;
  color: #cbb387;
  font-weight: 700;
  margin-bottom: 20px;
  margin-left: 12px;
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

const PriceContianer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const PriceTextContainer = styled.View`
  margin-right: 110px;
  justify-content: center;
`;

const PriceText = styled.Text`
  margin-left: 20px;
  padding-left: 10px;
  color: black;
  font-size: 18px;
`;

const QuoteContainer = styled.View`
  padding: 30px 20px 50px 20px;
`;

const DatePickerContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #939393;
  padding-bottom: 20px;
  margin-bottom: 25px;
`;

const StatusText = styled.Text`
  text-align: center;
  color: #8e1818;
  font-size: 20px;
  font-weight: 600;
  margin: 20px 10px 50px 10px;
`;

QuotedOrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  orders: PropTypes.array,
  cleaner: PropTypes.object,
  addQuoteWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { orders: state.orders.orders, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(QuotedOrderDetailScreen);
