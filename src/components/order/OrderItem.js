import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const ListItem = ({ order }) => {
  // console.log('TEST: ', order.item.image);
  // return <ImageArea source={{ uri: order.attributes.image_url }} />;
  return (
    <ImageArea
      source={require('../../../assets/images/shoes_placeholder.png')}
    />
  );
};

const ImageArea = styled.Image`
  width: ${WIDTH / 2.4}px;
  height: ${HEIGHT / 5}px;
  border-radius: 4px;
`;

ListItem.propTypes = {
  order: PropTypes.object,
};

export default ListItem;
