import React from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const ListItem = ({ order }) => {
  return order.attributes.image_url === null ? (
    <Image
      // eslint-disable-next-line no-undef
      source={require('../../../assets/images/shoes_placeholder.png')}
    />
  ) : (
    <ImageArea
      source={{ uri: order.attributes.image_url }}
      imageStyle={{ borderRadius: 25 }}
    >
      <StatusText>STATUS</StatusText>
    </ImageArea>
  );
};

const StatusText = styled.Text`
  font-family: Raleway-Bold;
  background-color: rgba(50, 168, 82, 0.5)
  color: white;

  font-size: 16px;
  padding: 5px;
`;

const ImageArea = styled.ImageBackground`
  width: ${WIDTH / 2.4}px;
  height: ${HEIGHT / 5}px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: ${WIDTH / 2.4}px;
  height: ${HEIGHT / 5}px;
  border-radius: 15px;
`;

ListItem.propTypes = {
  order: PropTypes.object,
};

export default ListItem;
