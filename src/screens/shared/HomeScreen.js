import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
// import OrdersList from "../client/OrdersListScreen";
// import { useRoute, useNavigation } from '@react-navigation/native';
// import NewOrder from "../client/NewOrderScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>Shine</Text>
      <Button
        title="START"
        containerStyle={{ paddingTop: 20, width: 350 }}
        buttonStyle={{ backgroundColor: 'black', height: 50, borderRadius: 7 }}
        onPress={() => navigation.navigate('NewOrder')}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 50px;
  font-weight: 500;
  font-family: Marison-Script-Vintage;
`;

export default HomeScreen;
