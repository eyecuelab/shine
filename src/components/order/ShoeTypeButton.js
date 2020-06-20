import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { color } from 'react-native-reanimated';

const ShoeTypeButton = ({ type, select, handleTypeChange }) => {

  return (
    <ShoeType
      select={select}
      onPress={() => {
        handleTypeChange(type);
      }}
    >
      <TypeText select={select}>{type}</TypeText>
    </ShoeType>
  );
};

const ShoeType = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: ${props => props.select ? '#c8b48a': '#e6e6e6'} 
  padding: 15px;
  width: 120px;
  margin: 5px;
`;

const TypeText = styled.Text`
  text-align: center;
  color: ${props => props.select ? 'white' : '#a8a8a8'};
`;

ShoeTypeButton.propTypes = {
  type: PropTypes.string
}

export default ShoeTypeButton;
