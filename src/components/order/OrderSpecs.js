import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import ShoeTypeButton from './ShoeTypeButton';
import { Button, Slider } from 'react-native-elements';
import Header from '../shared/Header';

const OrderSpecs = ({ image }) => {
  // const { image } = route.params;
  // console.log(image);

  return !image ?
  (
    <Container>
      <BodyText>Please Upload a Photo</BodyText>
    </Container>
  ) : (
      <Container>
        <ImageArea  source={{ uri: image }} />
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
              thumbStyle={customStyles.thumb}
            />
          </SliderContainer>
          <Button
            title="CONTINUE"
            containerStyle={{paddingTop: 20, width: 350 }}
            buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
            // onPress={() => {
            //   navigation.navigate('OrderNotes', {image})
            // }}
          />
        </Container>
      </Container>
  )
};

const customStyles = StyleSheet.create({
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.75
  }
});

const SliderContainer = styled.View`
  align-self: stretch;
  align-items: stretch;
  justify-content: center;
`;

const Row = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
`;

const ImageArea = styled.Image`
  flex: .5;
  align-self: stretch;
  align-items: center;
  justify-content: center;
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