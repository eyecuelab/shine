import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import ShoeTypeButton from './ShoeType';
import { Button, Slider } from 'react-native-elements';

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
          <SliderContainer>
            <BodyText>How soon do you need them cleaned?</BodyText>
            <Slider
              animateTransitions={true}
              minimumValue={1}
              maximumValue={10}
              thumbTintColor='#ffffff'
              thumbStyle={{border: 'black', borderWidth: 2,}}
            />
          </SliderContainer>
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

const SliderContainer = styled.View`
 
  align-self: stretch;
  align-items: stretch;
  justify-content: center;
 
`

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
  align-items: center;
  justify-content: center;
`;
const BodyText = styled.Text`
  text-align: center;
  margin-top: 50px;
  color: black;
  font-size: 18px;
  
`;
export default OrderSpecs;