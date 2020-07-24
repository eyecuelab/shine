import React, { useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import UniversalButton from '../../components/shared/UniversalButton';
import DashedLine from '../../components/shared/Dash';
import { formatDate, formatDateTime } from '../../components/shared/FormatDate';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const QuotableOrderDetailScreen = ({
  route,
  addQuoteWatcher,
  loadQuotedOrderWatcher,
  cleaner,
  navigation,
}) => {
  const item = route.params;

  const orderID = item ? item.id : null;
  const cleanerID = cleaner.data ? cleaner.data.id : null;

  const estimatedPrice = item.attributes.estimated_price;
  const [quotedPrice, setQuotedPrice] = useState(estimatedPrice);

  const today = new Date();
  const [expireDate, setExpireDate] = useState(new Date(today));
  const [completeDate, setCompeleteDate] = useState(new Date(today));
  const [mode, setMode] = useState('date');
  const [showExpire, setShowExpire] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const onExpireDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || expireDate;
    setShowExpire(Platform.OS === 'ios');
    setExpireDate(currentDate);
  };

  const onCompleteDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || completeDate;
    setShowComplete(Platform.OS === 'ios');
    setCompeleteDate(currentDate);
  };

  const showExpireMode = (currentMode) => {
    setShowExpire(!showExpire);
    setMode(currentMode);
  };

  const showCompleteMode = (currentMode) => {
    setShowComplete(!showComplete);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showExpireMode('date');
  };

  const showTimepicker = () => {
    showExpireMode('time');
  };

  const showCompleteDatePicker = () => {
    showCompleteMode('date');
  };

  const onSubmit = () => {
    addQuoteWatcher({
      orderID: orderID,
      quote: {
        quoted_price: quotedPrice,
        expires_at: expireDate,
        delivery_by: completeDate,
      },
    });
    loadQuotedOrderWatcher();
    navigation.navigate('Orders In Area');
  };

  const quotedOrder = cleaner.quotedOrders
    ? cleaner.quotedOrders.filter((item) => item.id == orderID)
    : null;

  console.log(quotedOrder);

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.attributes.image_url)}
      <CenterText>Client Order Details</CenterText>
      <InfoContainer>
        <TitelText>
          Order Id: <InfoText> {orderID}</InfoText>
        </TitelText>

        <TitelText>
          Time Frame: <InfoText> {item.attributes.time_frame}</InfoText>
        </TitelText>

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

      <DashedLine />
      {cleaner.quotedStatus[item.id] !== undefined &&
      cleaner.quotedStatus[item.id][cleanerID] == 'Requested' ? (
        <>
          <StatusContainer>
            <StatusText>Quote has been successfully requested.</StatusText>
          </StatusContainer>
          <InfoContainer>
            <TitelText>Quoted Price: </TitelText>
            <InfoText>{quotedPrice}</InfoText>
            <TitelText>Quote Expired At: </TitelText>
            <InfoText>{formatDateTime(expireDate)}</InfoText>
            <TitelText>Returned By:</TitelText>
            <InfoText>{formatDate(completeDate)}</InfoText>
          </InfoContainer>
        </>
      ) : (
        <>
          <QuoteContainer>
            <CenterText>Create a Quote</CenterText>
            <Input
              label="Quoted Price"
              labelStyle={{ marginTop: 20, fontSize: 20, color: '#939393' }}
              leftIcon={
                <FontAwesome
                  name="dollar"
                  size={20}
                  color="black"
                  style={{ marginRight: 5 }}
                />
              }
              value={quotedPrice}
              onChangeText={(text) => setQuotedPrice(text)}
            />

            <DatePickerContainer>
              <ListText>Expired At</ListText>
              <DateText>
                <FontAwesome
                  name="calendar"
                  size={24}
                  color="black"
                  style={{ marginRight: 5 }}
                />{' '}
                {formatDateTime(expireDate)}
              </DateText>
              <TouchableOpacity onPress={showDatepicker}>
                <DatePickerText>Set Expire Date</DatePickerText>
              </TouchableOpacity>
              <TouchableOpacity onPress={showTimepicker}>
                <DatePickerText>Set Expire Time</DatePickerText>
              </TouchableOpacity>
              {showExpire && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={expireDate}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onExpireDateChange}
                />
              )}
            </DatePickerContainer>

            <DatePickerContainer>
              <ListText>Delivery By</ListText>
              <DateText>
                <FontAwesome
                  name="calendar-check-o"
                  size={24}
                  color="black"
                  style={{ marginRight: 5 }}
                />{' '}
                {formatDate(completeDate)}
              </DateText>
              <TouchableOpacity onPress={showCompleteDatePicker}>
                <DatePickerText>Set Complete Date</DatePickerText>
              </TouchableOpacity>
              {showComplete && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={completeDate}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onCompleteDateChange}
                />
              )}
            </DatePickerContainer>
            <UniversalButton title={'SUBMIT'} width={275} onPress={onSubmit} />
          </QuoteContainer>
        </>
      )}
    </ScrollViewContailner>
  );
};

const InfoContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  margin-left: 20px;
`;

const CenterText = styled.Text`
  font-family: Raleway-Bold;
  color: #8e1818;
  font-size: 22px;
  text-align: center;
  height: 60px;
  padding: 20px;
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

const QuoteContainer = styled.View`
  padding: 0px 20px 50px 20px;
  margin: 0px 10px 10px 10px;
`;

const DatePickerContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #939393;
  padding-bottom: 20px;
  margin-bottom: 25px;
`;

const StatusContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 10px;
`;

const StatusText = styled.Text`
  font-family: Raleway-Bold;
  text-align: center;
  color: #8e1818;
  font-size: 20px;
  margin: 20px;
`;

QuotableOrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  orders: PropTypes.array,
  cleaner: PropTypes.object,
  addQuoteWatcher: PropTypes.func,
  loadQuotedOrderWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { orders: state.orders.orders, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(QuotableOrderDetailScreen);
