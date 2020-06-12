import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { View } from 'react-native';

const OrderSpecs = () => {
  return (
    <>
    <Container>
      <ImageArea />
      <Container>
        <BodyText>
          What is the typical use? 
        </BodyText>
        <Row>
          <ShoeType>
            <TypeText>INDOOR</TypeText>
          </ShoeType>
          <ShoeType>
            <TypeText>OUTDOOR</TypeText>
          </ShoeType>
          <ShoeType>
            <TypeText>EXERCISE</TypeText>
          </ShoeType>
        </Row>
        <Row>
          <ShoeType>
            <TypeText>LEISURE</TypeText>
          </ShoeType>
          <ShoeType>
            <TypeText>FORMAL</TypeText>
          </ShoeType>
          <ShoeType>
            <TypeText>SOCIAL</TypeText>
          </ShoeType>
        </Row>
      </Container>
    </Container>
    </>
  );
};

const Row = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  
`
const TypeText = styled.Text`
  text-align: center;
  color: #a8a8a8;
`

const ShoeType = styled.View`
  border-radius: 20px;
  background: #e6e6e6;
  color: grey;
  padding: 15px;
  width: 120px;
  margin: 5px;
`

const ImageArea = styled.View`
  flex: .5;
  background: #c6b18d;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border: 2px;
  border-width: 1px;
`;
const Container = styled.View`
  background: white;
  flex: 1;
  

`;
const BodyText = styled.Text`
  text-align: center;
  margin-top: 50px;
  color: black;
  font-size: 18px;
  
`;
export default OrderSpecs;