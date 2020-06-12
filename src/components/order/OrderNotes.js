import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import Header from '../shared/Header';

const OrderNotes = ({ navigation }) => {
  return (
    <>
      <Header title="" navigation={navigation} />
      <View>
        <Text>Step 3: Notes for the Cleaner</Text>
      </View>  
    </>
  );
}

export default OrderNotes;