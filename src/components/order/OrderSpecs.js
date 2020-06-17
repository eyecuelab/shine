import React, { useState, useEffect } from 'react';
import { StyleSheet, Input, View } from 'react-native';
import styled from 'styled-components/native';
import ShoeTypeButton from './ShoeTypeButton';
import { Button, Slider, CheckBox } from 'react-native-elements';
import Header from '../shared/Header';

const OrderSpecs = ({ image, jumpTo }) => {
  const [shoeTypeState, setShoeTypeState] = useState([]);

  useEffect(() => {
    let shoeTypeState = [
      { select: false, id: 1, type: "INDOOR" },
      { id: 2, type: "OUTDOOR" },
      { id: 3, type: "EXERCISE" },
      { id: 4, type: "LEISURE" },
      { id: 5, type: "FORMAL" },
      { id: 6, type: "SOCIAL" },
    ];

    console.log(shoeTypeState[0]);

    setShoeTypeState(
      shoeTypeState.map((d) => {
        return  {
          select: false,
          id: d.id, 
          type: d.type 
        };
      })
    );
  }, []);

  return (
      <Container>
        <ImageArea  source={{ uri: image }} />
        <Container>
          <BodyText>
            What is the typical use? 
          </BodyText>

        {shoeTypeState.map((d, i) =>(
          <Row key={d.id}>
            <CheckBox onPress={() => {
              setShoeTypeState(
                shoeTypeState.map(data => {
                  if (d.id === data.id) {
                    data.select = !data.select;
                  }
                  console.log(data.select)
                  return data;
                })
              )
            }}
            checked={d.select}
            />
          </Row>
        ))}


          {/* <Row>
            <ShoeTypeButton 
              type="INDOOR"/>
            <ShoeTypeButton 
              type="OUTDOOR"/>
            <ShoeTypeButton 
             type="EXERCISE"/>
          </Row>
          <Row>
            <ShoeTypeButton 
              type="LEISURE"/>
            <ShoeTypeButton
              type="FORMAL"/>
            <ShoeTypeButton 
              type="SOCIAL"/>
          </Row> */}
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
            onPress={() => {
              jumpTo('third')
            }}
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
  flex: .75;
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