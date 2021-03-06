import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ShoeTypeButton = ({ type, shoeTypes, handleTypeChange }) => {
  const findSelected = _.find(shoeTypes, { style: type });
  const select = findSelected.chosen;

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
  background-color: ${(props) => (props.select ? '#c8b48a' : '#e6e6e6')}
  padding: 15px;
  width: 110px;
  margin: 3px;
`;

const TypeText = styled.Text`
  font-family: Raleway-Bold
  font-size: 13px
  text-align: center;
  color: ${(props) => (props.select ? 'white' : '#a8a8a8')};
`;

ShoeTypeButton.propTypes = {
  type: PropTypes.string,
  select: PropTypes.bool,
  handleTypeChange: PropTypes.func,
  shoeTypes: PropTypes.array,
};

export default ShoeTypeButton;
