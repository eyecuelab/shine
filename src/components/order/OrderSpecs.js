import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import ShoeTypeButton from './ShoeTypeButton';
import { Button, Slider } from 'react-native-elements';
import ScrollViewContainer from '../shared/ScrollViewContainer';
import DashedLine from '../shared/Dash';
import PropTypes from 'prop-types';
import ShoePhoto from '../shared/ShoePhoto';

const OrderSpecs = ({
  image,
  jumpTo,
  sliderValue,
  setSliderValue,
  shoeTypes,
  setShoeTypes,
}) => {
  const handleTypeChange = (type) => {
    console.log(type);
    setShoeTypes((current) => ({
      ...current,
      [type]: !shoeTypes[type],
    }));
  };

  const handleValueChange = (value) => {
    let valueName = '';
    if (value === 2) {
      valueName = 'Within 24 Hours';
    }
    if (value === 4) {
      valueName = 'Within 2 Days';
    }
    if (value === 6) {
      valueName = 'Within a Week';
    }
    return valueName;
  };

  return (
    <ScrollViewContainer>
      {ShoePhoto(image)}
      <Container>
        <TypeContainer>
          <BodyText>What is the typical use?</BodyText>
          <Row>
            <ShoeTypeButton
              type="INDOOR"
              select={shoeTypes['INDOOR']}
              handleTypeChange={handleTypeChange}
            />
            <ShoeTypeButton
              type="OUTDOOR"
              select={shoeTypes['OUTDOOR']}
              handleTypeChange={handleTypeChange}
            />
            <ShoeTypeButton
              type="EXERCISE"
              select={shoeTypes['EXERCISE']}
              handleTypeChange={handleTypeChange}
            />
          </Row>
          <Row>
            <ShoeTypeButton
              type="LEISURE"
              select={shoeTypes['LEISURE']}
              handleTypeChange={handleTypeChange}
            />
            <ShoeTypeButton
              type="FORMAL"
              select={shoeTypes['FORMAL']}
              handleTypeChange={handleTypeChange}
            />
            <ShoeTypeButton
              type="SOCIAL"
              select={shoeTypes['SOCIAL']}
              handleTypeChange={handleTypeChange}
            />
          </Row>
        </TypeContainer>
        <DashedLine />
        <SliderContainer>
          <BodyText>How soon do you need them cleaned?</BodyText>
          <SlideTextContainer>
            <SlideText>{sliderValue}</SlideText>
          </SlideTextContainer>
          <Slider
            step={2}
            minimumValue={2}
            maximumValue={6}
            value={4}
            thumbTintColor="#ffffff"
            thumbStyle={customStyles.thumb}
            onValueChange={(value) => setSliderValue(handleValueChange(value))}
          />
        </SliderContainer>
        <Button
          title="CONTINUE"
          containerStyle={{ paddingVertical: 10, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={() => {
            jumpTo('third');
          }}
        />
      </Container>
    </ScrollViewContainer>
  );
};

const customStyles = StyleSheet.create({
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.75,
  },
});

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const BodyText = styled.Text`
  margin-bottom: 15px;
  text-align: center
  color: black;
  font-size: 18px;
`;

const SlideTextContainer = styled.View`
  border-radius: 18px;
  background-color: #cbb387;
  padding: 10px;
  width: 60%;
  margin: auto;
`;

const SlideText = styled.Text`
  margin-bottom: 5px;
  text-align: center
  color: #E6E6E6;
  font-size: 18px;
`;

const TypeContainer = styled.View`
  margin: 20px 20px 0px 20px;
`;

const Row = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
`;

const SliderContainer = styled.View`
  align-self: stretch;
  align-items: stretch;
  justify-content: center;
  margin: 0px 40px 20px 40px;
`;

OrderSpecs.propTypes = {
  image: PropTypes.any,
  jumpTo: PropTypes.func,
  sliderValue: PropTypes.string,
  setSliderValue: PropTypes.func,
  shoeTypes: PropTypes.array,
  setShoeTypes: PropTypes.func,
};

export default OrderSpecs;
