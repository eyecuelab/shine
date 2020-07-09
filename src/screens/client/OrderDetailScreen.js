import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dimensions, TextInput, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import PriceTagBlack from '../../components/shared/PriceTagBlack';
import DashedLine from '../../components/shared/Dash';
import ShoePhoto from '../../components/shared/ShoePhoto';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const { width } = Dimensions.get('window');

const OrderDetailScreen = ({ navigation, postOrder }) => {
  const route = useRoute();
  const item = route.params;

  const [polish, setPolish] = useState(false);
  const [rainProtection, setRainProtection] = useState(false);
  const [replaceLaces, setReplaceLaces] = useState(false);

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [locState, setLocState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = () => {
    postOrder({
      shoe_types: ['Indoor', 'Outdoor'],
      time_frame: item.timeFrame,
      add_ons: {
        polish: polish,
        replaceLaces: replaceLaces,
        rainProtection: rainProtection,
      },
      estimated_price: 7,
      note: item.note,
      street_address: street,
      city: city,
      state: locState,
      postal_code: postalCode,
    });
    navigation.navigate('Home');
  };

  return (
    <ScrollViewContailner>
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
          {PriceTagBlack(35, 99)}
        </PriceContianer>

        <DashedLine />

        <Text>Pickup & drop-off location for the cleaner</Text>
        <TextInput
          style={styles.input}
          placeholder="STREET ADDRESS"
          returnKeyType="next"
          onChangeText={(text) => setStreet(text)}
          value={street}
        />
        <TextInput
          style={styles.input}
          placeholder="CITY"
          returnKeyType="next"
          onChangeText={(text) => setCity(text)}
          value={city}
        />
        <TextInput
          style={styles.input}
          placeholder="STATE"
          autoCapitalize="characters"
          returnKeyType="next"
          onChangeText={(text) => setLocState(text)}
          value={locState}
        />
        <TextInput
          style={styles.input}
          placeholder="ZIP CODE"
          returnKeyType="done"
          onChangeText={(text) => setPostalCode(text)}
          value={postalCode}
        />

        <DashedLine />

        <Button
          title="START A CLEANING REQUEST"
          containerStyle={{ paddingVertical: 10, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={() => {
            handleSubmit();
          }}
        />
      </Container>
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
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.Text`
  margin-top: 10px;
  padding-bottom: 10px;
  color: #42413c;
  font-size: 18px;
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
  text-align: left;
  padding-left: 10px;
  color: black;
  font-size: 18px;
`;

OrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  postOrder: PropTypes.func,
  requestComplete: PropTypes.func,
  orders: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrderDetailScreen);
