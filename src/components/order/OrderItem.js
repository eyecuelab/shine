import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const ListItem = ({ order }) => {
  // console.log('TEST: ', order.item.image);
  return <ImageArea source={{ uri: order.image }} />;
};

const ImageArea = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 4px;
  padding: 5px;
`;

ListItem.propTypes = {
  order: PropTypes.object,
};

export default ListItem;
