import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const ListItem = ({ order }) => {
  // console.log('TEST: ', order.item.image);
  return (
    <View style={{ alignSelf: 'stretch' }}>
      <ImageArea source={{ uri: order.image }} />
    </View>
  );
};

const ImageArea = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 4px;
  padding: 5px;
`;

export default ListItem;
