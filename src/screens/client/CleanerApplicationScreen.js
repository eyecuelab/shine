import React from 'react';
import Header from "../../components/shared/Header";
import styled from "styled-components";

export default CleanerApplicationScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Cleaner Application" navigation={navigation} />
      <Container>
        <Text>CleanerApplicationScreen</Text>
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