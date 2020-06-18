import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { color } from 'react-native-reanimated';

const ShoeTypeButton = ({ type, select, setShoeTypes, shoeTypes }) => {

// const [selected, setSelected] = useState(true);

// console.log(selected);
// const handleSelected = () => {
//   if (selected) {
//     setSelected(false);
//   } else if (selected===false) {
//     setSelected(true);
//   } 
// }

  return (
    <ShoeType
      select={select}
      onPress={() => {
        setShoeTypes(
          shoeTypes.map(data => {
            
            if (type === data.type) {
              data.select = !data.select;
            }
            return data;
          })
        )
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
  color: ${props=> props.select ? 'white' : '#a8a8a8'};
`;

ShoeTypeButton.propTypes = {
  type: PropTypes.string
}


export default ShoeTypeButton;
