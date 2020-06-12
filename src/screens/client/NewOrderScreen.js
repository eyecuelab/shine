import React from 'react';
import Header from "../../components/shared/Header";
import styled from "styled-components/native";

const NewOrderScreen = ({ navigation }) => {
  return (
    <>
      <Header title="New Order" navigation={navigation} />
      <Container>
        <Text>NewOrderScreen</Text>
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
  font-size: 20px;
  font-weight: 500;
`;

export default NewOrderScreen;