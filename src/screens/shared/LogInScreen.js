import React from 'react';
import Header from "../../components/shared/Header";
import styled from "styled-components/native";

const LogInScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Log in" navigation={navigation} />
      <Container>
        <Text>LogInScreen</Text>
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

export default LogInScreen;