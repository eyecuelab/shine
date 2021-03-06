import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import PriceTagBlack from '../../components/shared/PriceTagBlack';
import DashedLine from '../../components/shared/Dash';
import ShoePhoto from '../../components/shared/ShoePhoto';
import UniversalButton from '../../components/shared/UniversalButton';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';
import _ from 'lodash';

const { width } = Dimensions.get('window');

const OrderDetailScreen = ({ navigation, postOrder, users, userInfo }) => {
  const route = useRoute();
  const item = route.params;

  function filter(object) {
    let newArray = [];
    if (object.chosen === true) {
      newArray.push(object.style);
    }
    return newArray;
  }
  const chosenShoeTypes = _.flatMap(item.shoeTypes, filter);

  function timePrice(time) {
    if (time === 'Within 24 Hours') {
      return 7.5;
    } else if (time === 'Within 2 Days') {
      return 5.5;
    } else {
      return 3.5;
    }
  }
  function typePrice(chosen) {
    if (chosen.includes('OUTDOOR' || 'FORMAL' || 'SOCIAL')) {
      return 10;
    } else if (chosen.includes('INDOOR' || 'LEISURE' || 'EXERCISE')) {
      return 5;
    }
  }

  const deliveryFee = 5;
  const priceByTime = timePrice(item.timeFrame);
  const priceByStyle = typePrice(chosenShoeTypes);
  const addPrice = _.sum([priceByTime, priceByStyle, deliveryFee]);
  const estPrice = _.floor(addPrice) + 0.99;

  const [polish, setPolish] = useState(false);
  const [rainProtection, setRainProtection] = useState(false);
  const [replaceLaces, setReplaceLaces] = useState(false);

  const [street, setStreet] = useState(userInfo.street_address);
  const [city, setCity] = useState(userInfo.city);
  const [locState, setLocState] = useState(userInfo.state);
  const [postalCode, setPostalCode] = useState(userInfo.postal_code);

  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);
  const inputEl5 = useRef(null);

  const handleSubmit = () => {
    if (users.data !== null) {
      postOrder({
        image_url: item.image,
        shoe_types: chosenShoeTypes,
        time_frame: item.timeFrame,
        add_ons: {
          polish: polish,
          replaceLaces: replaceLaces,
          rainProtection: rainProtection,
        },
        estimated_price: estPrice,
        note: item.note,
        street_address: street,
        city: city,
        state: locState,
        postal_code: postalCode,
      });
      navigation.navigate('Home');
    } else {
      navigation.navigate('Welcome');
    }
  };

  const inputE12 = React.useRef(null);
  const inputE13 = React.useRef(null);
  const inputE14 = React.useRef(null);

  return (
    <ScrollViewContailner>
      <KeyboardAvoidingView
        // eslint-disable-next-line no-undef
        behavior={Platform.OS == 'ios' ? 'position' : 'height'}
      >
        {ShoePhoto(item.image)}
        <Container>
          <Text>Nice! The shoe cleaners are ready to work!</Text>
          <SwitchTextContainer>
            <SwitchText>ADD POLISH</SwitchText>
            <SwitchText>ADD RAIN PROTECTION</SwitchText>
            <SwitchText>REPLACE SHOELACES</SwitchText>
          </SwitchTextContainer>
          <SwitchContainer>
            <AddOnSwitch
              disabled={false}
              switchState={polish}
              setSwitchState={setPolish}
            />
            <AddOnSwitch
              disabled={false}
              switchState={rainProtection}
              setSwitchState={setRainProtection}
            />
            <AddOnSwitch
              disabled={false}
              switchState={replaceLaces}
              setSwitchState={setReplaceLaces}
            />
          </SwitchContainer>
          <PriceContianer>
            <PriceTextContainer>
              <PriceText>ROUGH EST.</PriceText>
            </PriceTextContainer>
            {PriceTagBlack(estPrice)}
          </PriceContianer>

          <DashedLine />

          <Text>Pickup & drop-off location for the cleaner</Text>
          <TextInput
            style={styles.input}
            placeholder="STREET ADDRESS"
            keyboardType="ascii-capable"
            autoCapitalize="words"
            returnKeyType="next"
            onChangeText={(text) => setStreet(text)}
            value={street}
            onSubmitEditing={() => inputEl2.current.focus()}
          />
          <TextInput
            ref={inputEl2}
            style={styles.input}
            placeholder="CITY"
            autoCapitalize="words"
            returnKeyType="next"
            onChangeText={(text) => setCity(text)}
            value={city}
            onSubmitEditing={() => inputEl3.current.focus()}
          />
          <TextInput
            ref={inputEl3}
            style={styles.input}
            placeholder="STATE"
            autoCapitalize="characters"
            returnKeyType="next"
            onChangeText={(text) => setLocState(text)}
            value={locState}
            onSubmitEditing={() => inputEl4.current.focus()}
          />
          <TextInput
            ref={inputEl4}
            style={styles.input}
            placeholder="ZIP CODE"
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={(text) => setPostalCode(text)}
            value={postalCode}
            // onSubmitEditing={() => inputE15.current.focus()}
          />

          <DashedLine />
          <UniversalButton
            title={'REQUEST QUOTES'}
            width={275}
            onPress={handleSubmit}
          />
        </Container>
      </KeyboardAvoidingView>
    </ScrollViewContailner>
  );
};

const styles = StyleSheet.create({
  input: {
    width: width * 0.8,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 10,
    textAlign: 'center',
  },
});

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.Text`
  font-family: Raleway-Bold;
  margin-top: 20px;
  padding-bottom: 10px;
  color: #42413c;
  font-size: 16px;
`;

const SwitchTextContainer = styled.View`
  margin-right: 90px;
`;

const SwitchText = styled.Text`
  font-family: Raleway-Medium;
  text-align: left;
  margin: 15px 0px 0px 20px;
  color: black;
  font-size: 17px;
`;

const SwitchContainer = styled.View`
  margin-top: 40px;
  padding-top: 10px;
  margin-right: 15px;
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

OrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  postOrder: PropTypes.func,
  publishOrder: PropTypes.func,
  requestComplete: PropTypes.func,
  orders: PropTypes.array,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    users: state.users,
    userInfo: state.users.data.included[0].attributes,
  };
};

export default connect(mapStateToProps, actions)(OrderDetailScreen);
