import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import styled from 'styled-components/native';
import ShoeTypeButton from './ShoeTypeButton';
import { Button, Slider } from 'react-native-elements';

const OrderSpecs = ({ image, jumpTo }) => {
  
const [shoeTypes, setShoeTypes ] = useState([
  {type: "OUTDOOR", select: false},
  {type: "INDOOR", select: false},
  {type: "EXERCISE", select: false},
  {type: "LEISURE", select: false},
  {type: "FORMAL", select: false},
  {type: "SOCIAL", select: false},
]);

console.log("hello", shoeTypes)

useEffect(() => {
  setShoeTypes(
    shoeTypes.map((d) => {
      return {
        type: d.type,
        select: d.select,
      }
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
        
        <FlatList
          data={shoeTypes}
          renderItem={({ item }) => 
            
            <ShoeTypeButton 
              type={item.type} 
              select={item.select} 
              setShoeTypes={setShoeTypes}
              shoeTypes={shoeTypes}
            />}
          keyExtractor={item => item.type}
        />

    

        <SliderContainer>
          <BodyText>How soon do you need them cleaned?</BodyText>
          <Slider
            animateTransitions={false}
            minimumValue={1}
            maximumValue={5}
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
  );
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