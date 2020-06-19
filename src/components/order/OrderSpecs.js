import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import ShoeTypeButton from './ShoeTypeButton';
import { Button, Slider } from 'react-native-elements';

const OrderSpecs = ({ image, jumpTo }) => {

const [sliderValue, setSliderValue] = useState('Within Two Days')

console.log(sliderValue);
  
const [shoeTypes, setShoeTypes ] = useState([
  {type: "OUTDOOR", select: false},
  {type: "INDOOR", select: false},
  {type: "EXERCISE", select: false},
  {type: "LEISURE", select: false},
  {type: "FORMAL", select: false},
  {type: "SOCIAL", select: false},
]);

const handleTypeChange = (type) => {
  setShoeTypes(
    shoeTypes.map(data => {
      
      if (type === data.type) {
        data.select = !data.select;
      }
      return data;
    })
  )
}
console.log(shoeTypes);

const handleValueChange = (value) => {
  let valueName = ''
  if (value === 2) {
    valueName = 'Within 24 Hours'
  }
  if (value === 4) {
    valueName = 'Within 2 Days'
  }
  if (value === 6 ) {
    valueName = 'Within a Week'
  }
  return valueName;
}

  return (
    <Container>
      <ImageArea  source={{ uri: image }} />
      <Container>
        <BodyText>
          What is the typical use? 
        </BodyText>
      
          <FlatList
            
            scrollEnabled={false}
            numColumns={3}
            data={shoeTypes}
            renderItem={({ item }) => 
              <ShoeTypeButton 
                type={item.type} 
                select={item.select} 
                handleTypeChange={handleTypeChange}
              />}
            keyExtractor={item => item.type}
          />
    
        <SliderContainer>
          <BodyText>How soon do you need them cleaned?</BodyText>
          <BodyText>{sliderValue}</BodyText>
          <Slider
            step={2}
            minimumValue={2}
            maximumValue={6}
            value={4}
            thumbTintColor='#ffffff'
            thumbStyle={customStyles.thumb}
            // onValueChange={(value) => handleValueChange({ value })}
            onValueChange={(value) => setSliderValue(handleValueChange(value))}
            
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
  margin-left: 40px;
  margin-right: 40px;
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
  margin: 15px
  text-align: center
  color: black;
  font-size: 18px;
`;

export default OrderSpecs;