import React from 'react';
import Header from "../../components/shared/Header";
import styled from "styled-components";

export default HomeScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Home" navigation={navigation} />
      <Container>
        <Text>HomeScreen</Text>
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
  font-family: Ladytron; 
`;