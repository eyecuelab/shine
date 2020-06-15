import React from 'react';
import Header from "../../components/shared/Header";
import styled from "styled-components/native";
import { Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Home" navigation={navigation} />
      <Container>
        <Text>Shine</Text>
        <Button
          title="START"
          containerStyle={{paddingTop: 20, width: 350 }}
          buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
          onPress={() => {
            navigation.navigate('SelectPhoto')
          }}
        />
      </Container>
    </>
  )
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
  
`;

export default HomeScreen