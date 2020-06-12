import React from 'react';
import styled from "styled-components/native";
import { Button } from 'react-native-elements';
import Camera from "./Camera";
import Header from '../shared/Header';

const TakePhoto = ({navigation}) => {
  return (
    <>
    <Header title="" navigation={navigation} />
    <Container>
      <CameraView>
        <Text>Camera View</Text>
      </CameraView>
      <Container style={{padding: 18}}>
        <Text>Add a pair of shoes from your closet. Please follow the outlines as close as possible.</Text>
        <Button
          title="CONTINUE"
          containerStyle={{paddingTop: 20, width: 350 }}
          buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
        />
      </Container>
    </Container>
  </>
  );
};

const CameraView = styled.View`
  flex: 2;
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

export default TakePhoto;

