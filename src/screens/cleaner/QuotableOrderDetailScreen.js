import React, { useState } from 'react';
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Keyboard,
  TouchableHighlight,
  Alert,
  Modal,
} from 'react-native';
import { connect } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import { formatDate } from '../../components/shared/DateFormatting';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const QuotableOrderDetailScreen = ({ route }) => {
  const item = route.params;
  // console.log('DETAIL', item);
  const today = new Date();
  const [expireDate, setExpireDate] = useState(new Date(today));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  console.log('F', formatDate(expireDate));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || expireDate;
    setShow(Platform.OS === 'ios');
    setExpireDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.image)}
      <Container>
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

      <View>
        <Button onPress={showDatepicker} title="Set Expire Date" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Set Expire Time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={expireDate}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
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
  font-size: 20px;
  color: #8e1818;
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

QuotableOrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  orders: PropTypes.array,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { orders: state.orders, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(QuotableOrderDetailScreen);
