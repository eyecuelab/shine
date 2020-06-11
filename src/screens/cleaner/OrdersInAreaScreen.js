import React from 'react';
import DrawerButton from "../../components/shared/DrawerButton";
import styled from "styled-components";

export default OrdersInAreaScreen = ({ navigation }) => {
  return (
    <>
      <DrawerButton navigation={navigation} />
      <Container>
        <Text>OrdersInAreaScreen</Text>
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