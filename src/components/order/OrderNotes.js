import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import Header from '../shared/Header';

const OrderNotes = ({ route, navigation }) => {
  const { image } = route.params;
  // console.log(image);
  return (
    <>
      <Header title="" navigation={navigation} />
      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      <View>
        <Text>Step 3: Notes for the Cleaner</Text>
        {/* <Text>image: {JSON.stringify(image)}</Text> */}
      </View>  
    </>
  );
}

export default OrderNotes;