import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Modal,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import PriceTagBlack from '../../components/shared/PriceTagBlack';
import DashedLine from '../../components/shared/Dash';
import ShoePhoto from '../../components/shared/ShoePhoto';
import { formatDate } from '../../components/shared/FormatDate';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';
import _ from 'lodash';

const { width } = Dimensions.get('window');

const OrderDetailScreen = ({ navigation, postOrder, publishOrderWatcher }) => {
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
  const estPrice = _.floor(addPrice);

  const [polish, setPolish] = useState(false);
  const [rainProtection, setRainProtection] = useState(false);
  const [replaceLaces, setReplaceLaces] = useState(false);

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [locState, setLocState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const currentDate = formatDate(new Date());

  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);
  const inputEl5 = useRef(null);

  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);

  const handleSubmit = () => {
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
    setModalVisible(!modalVisible);
    // publishOrderWatcher({ published_at: currentDate });
    // navigation.navigate('Home');
  };

  const handlePublish = () => {
    publishOrderWatcher({ published_at: currentDate });
  };

  return (
    <ScrollViewContailner>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'position' : 'height'}
      >
        {ShoePhoto(item.image)}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <ModalContainer>
            <ModalView>
              <ModalText>Would you like to publish this order?</ModalText>
              <ModalItem onPress={handlePublish}>
                <RedText>Publish</RedText>
              </ModalItem>
              <ModalItem
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <BlueText>Cancel</BlueText>
              </ModalItem>
            </ModalView>
          </ModalContainer>
        </Modal>

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
            {PriceTagBlack(estPrice, 99)}
          </PriceContianer>

          <DashedLine />

          <Text>Pickup & drop-off location for the cleaner</Text>
          <TextInput
            style={styles.input}
            placeholder="STREET ADDRESS"
            keyboardType="ascii-capable"
            returnKeyType="next"
            onChangeText={(text) => setStreet(text)}
            value={street}
            onSubmitEditing={() => inputEl2.current.focus()}
          />
          <TextInput
            ref={inputEl2}
            style={styles.input}
            placeholder="CITY"
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

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const ModalView = styled.View`
  margin: 20px;
  background-color: #e6e6e6;
  border-radius: 20;
  padding: 30px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-opacity: 0.25;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ModalItem = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #e6e6e6;
  padding-top: 20px;
  border-top-width: 1px;
  border-top-color: #939393;
`;

const ModalText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
  text-align: center;
`;

const RedText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  color: #8e1818;
`;

const BlueText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  color: #3483eb;
`;

const Container = styled.View`
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
  publishOrder: PropTypes.func,
  requestComplete: PropTypes.func,
  orders: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrderDetailScreen);
