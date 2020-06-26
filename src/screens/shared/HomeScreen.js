import React from 'react';
// import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
// import OrdersList from "../client/OrdersListScreen";
// import { useRoute, useNavigation } from '@react-navigation/native';
// import NewOrder from "../client/NewOrderScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <ImageArea onPress={() => navigation.navigate('NewOrder')}>
        <Image source={require('../../../assets/images/logo.png')} />
      </ImageArea>
      <Button
        title="NEW ORDER"
        containerStyle={{ paddingTop: 20, width: 350 }}
        buttonStyle={{ backgroundColor: 'black', height: 50, borderRadius: 7 }}
        onPress={() => navigation.navigate('NewOrder')}
      />
      <Button
        title="MY ORDERS"
        containerStyle={{ paddingTop: 20, width: 350 }}
        buttonStyle={{ backgroundColor: 'black', height: 50, borderRadius: 7 }}
        onPress={() => navigation.navigate('OrdersList')}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #cbb387;
`;

const ImageArea = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Text = styled.Text`
  color: black;
  font-size: 50px;
  font-weight: 500;
  font-family: Marison-Script-Vintage;
`;

export default HomeScreen;
