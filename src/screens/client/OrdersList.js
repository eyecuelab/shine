import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const OrdersList = () => {
  const route = useRoute();
  const { image } = route.params;

  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate('OrderDetail', {image})
  }

  return (
    <>
    <TouchableOpacity onPress={goToDetail}> 
      <Container>
        <ImageArea source={{ uri: image }}/>
      </Container>
    </TouchableOpacity>  
    </>  
  ); 
}

const Container = styled.View`
  margin: 10px;
`;

const ImageArea = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 4px;
  padding: 5px;
`;

export default OrdersList;