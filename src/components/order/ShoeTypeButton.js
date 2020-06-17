import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { color } from 'react-native-reanimated';

const ShoeTypeButton = ({ type }) => {

const [selected, setSelected] = useState(true);

// console.log(selected);
const handleSelected = () => {
  if (selected) {
    setSelected(false);
  } else if (selected===false) {
    setSelected(true);
  } 
}

  return (
    <ShoeType
      selected={selected}
      onPress={() => {
        handleSelected()
      }}
    >
      <TypeText selected={selected}>{type}</TypeText>
    </ShoeType>
  );
};

const ShoeType = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: ${props => props.selected ? '#e6e6e6' : '#c8b48a'} 
  
  padding: 15px;
  width: 120px;
  margin: 5px;
`;

const TypeText = styled.Text`
  text-align: center;
  color: ${props=> props.selected ? '#a8a8a8' : 'white'};
`;

ShoeTypeButton.propTypes = {
  type: PropTypes.string
}


export default ShoeTypeButton;
