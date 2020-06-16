import React from 'react';
import { Text, View } from 'react-native';
import Header from '../shared/Header';

const OrderStatus = ({ navigation }) => {
  return (
    <>
      <Header title="Order Status" navigation={navigation} />
      <View>
        <Text> textInComponent </Text>
      </View>
    </>  
  ); 
}

export default OrderStatus;