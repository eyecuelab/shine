import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import ShoeTypeButton from './ShoeType';

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
          <ShoeTypeButton type="INDOOR"/>
          <ShoeTypeButton type="OUTDOOR"/>
          <ShoeTypeButton type="EXERCISE"/>
        </Row>
        <Row>
          <ShoeTypeButton type="LEISURE"/>
          <ShoeTypeButton type="FORMAL"/>
          <ShoeTypeButton type="SOCIAL"/>
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