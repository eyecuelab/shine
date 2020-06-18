import React from 'react';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';

const OrderDetailScreen = () => {
  const route = useRoute();
  const { image } = route.params;

  return (
    <ImageArea source={{ uri: image }}/>
  );
};  

const Container = styled.View`
  background: white;
  flex: 1;
  align-items: center;
`;

const ImageArea = styled.Image`
  flex: .3;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export default OrderDetailScreen;