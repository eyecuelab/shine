import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const ListItemCompleted = ({ order }) => {
  return order.attributes.image_url === null ? (
    <ImageArea
      // eslint-disable-next-line no-undef
      source={require('../../../assets/images/shoes_placeholder.png')}
    />
  ) : (
    <ImageArea source={{ uri: order.attributes.image_url }} />
  );
};

const ImageArea = styled.Image`
  width: ${WIDTH / 2.4}px;
  height: ${HEIGHT / 5}px;
  border-radius: 4px;
  opacity: 0.3;
`;

ListItemCompleted.propTypes = {
  order: PropTypes.object,
};

export default ListItemCompleted;
