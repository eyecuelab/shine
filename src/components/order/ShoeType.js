import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShoeTypeButton = ({ type }) => {
  return (
    <ShoeType>
      <TypeText>{type}</TypeText>
    </ShoeType>
  );
};

const ShoeType = styled.TouchableOpacity`
  border-radius: 20px;
  background: #e6e6e6;
  color: grey;
  padding: 15px;
  width: 120px;
  margin: 5px;
`;
const TypeText = styled.Text`
  text-align: center;
  color: #a8a8a8;
`;

ShoeTypeButton.propTypes = {
  type: PropTypes.string
}


export default ShoeTypeButton;
