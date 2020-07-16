import React, { useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import { formatDate, formatDateTime } from '../../components/shared/FormatDate';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const QuotableOrderDetailScreen = ({ route }) => {
  const item = route.params;
  // console.log('DETAIL', item);
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
    const currentDate = selectedDate || expireDate;
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
    console.log({
      quoted_price: quotedPrice,
      expires_at: formatDateTime(expireDate),
      delivery_by: formatDate(completeDate),
    });
  };

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.image)}
      <Container>
        <Text>{item.id}</Text>
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
      </Container>

      <QuoteContainer>
        <Text>Create a Quote</Text>
        <Input
          label="Quoted Price"
          labelStyle={{ fontSize: 20, color: '#939393' }}
          leftIcon={
            <FontAwesome
              name="dollar"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
          }
          placeholder={estimatedPrice}
          value={quotedPrice}
          onChangeText={(text) => setQuotedPrice(text)}
        />

        <DatePickerContainer>
          <TitleText>Expired At</TitleText>
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
          <TitleText>Delivery By</TitleText>
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
      </QuoteContainer>
    </ScrollViewContailner>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.Text`
  font-size: 22px;
  color: #8e1818;
  font-weight: 600;
  margin-bottom: 20px;
`;

const TitleText = styled.Text`
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

const QuoteContainer = styled.View`
  margin-vertical: 20px;
  padding: 30px 20px 40px 20px;
  border: 2px black;
`;

const DatePickerContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #939393;
  padding-bottom: 20px;
  margin-bottom: 25px;
`;

QuotableOrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  orders: PropTypes.array,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { orders: state.orders, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(QuotableOrderDetailScreen);
