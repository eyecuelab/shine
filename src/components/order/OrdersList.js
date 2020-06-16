import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const OrdersList = ({ route }) => {
  const { image } = route.params;

  return (
    <>
      <ImageArea source={{ uri: image }}/>
      <View>
        <Text> textInComponent </Text>
      </View>
    </>  
  ); 
}

const ImageArea = styled.Image`
  flex: .5;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export default OrdersList;