import React, { useState } from 'react';
import { Dimensions, TextInput, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import AdditionalServiceSwitch from '../../components/order/AdditionalServiceSwitch';
import Price from '../../components/shared/Price';
import DashedLine from '../../components/shared/Dash';
import Image from '../../components/shared/Image';
import { Button } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

const OrderDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const { image } = route.params;

  const [street, onChangeStreet] = useState();
  const [unitNum, onChangeUnitNum] = useState();
  const [zipcode, onChangeZipcode] = useState();

  return (
    <ScrollViewContailner>
      {Image(image)}
      <Container>
        <Text>Nice! The shoe cleaners are ready to work!</Text>
        <SwitchTextContainer>
          <SwitchText>ADD POLISH</SwitchText>
          <SwitchText>ADD RAIN PROTECTION</SwitchText>
          <SwitchText>REPLACE SHOELACES</SwitchText>
        </SwitchTextContainer>
        <SwitchContainer>
          <AdditionalServiceSwitch />
        </SwitchContainer>
        <PriceContianer>
          <PriceTextContainer>
            <PriceText>ROUGH EST.</PriceText>
          </PriceTextContainer>
          {Price(35, 99)}
        </PriceContianer>

        <DashedLine />

        <Text>Pickup & drop-off location for the cleaner</Text>
        <TextInput
          style={styles.input}
          placeholder="STREET ADDRESS"
          returnKeyType="next"
          onChangeText={(text) => onChangeStreet(text)}
          value={street}
        />
        <TextInput
          style={styles.input}
          placeholder="APT/ UNIT #/BUILDING"
          returnKeyType="next"
          onChangeText={(text) => onChangeUnitNum(text)}
          value={unitNum}
        />
        <TextInput
          style={styles.input}
          placeholder="STREET ADDRESS"
          returnKeyType="done"
          onChangeText={(text) => onChangeZipcode(text)}
          value={zipcode}
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
            navigation.navigate('OrdersList', { image });
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
  }
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

export default OrderDetailScreen;

// border: 1px solid black;
