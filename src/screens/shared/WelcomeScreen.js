import React from 'react';
import Header from "../../components/shared/Header";
import styled from "styled-components";

export default WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Welcome" navigation={navigation} />
      <Container>
        <CameraView>
          <Text>Camera View</Text>
        </CameraView>
        <Container style={{padding: 18}}>
          <Text>Add a pair of shoes from your closet. Please follow the outlines as close as possible.</Text>
        </Container>
        
      </Container>
    </>
  )
};  

const CameraView = styled.View`
  flex: 1.5;
  background: #c6b18d;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border: black;
  border-width: 1px;

`


const Container = styled.View`

  background: white;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: 500;
`;