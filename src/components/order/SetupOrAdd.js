import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import Header from '../shared/Header';

const SetupOrAdd = ({ route, navigation }) => {
  const { image } = route.params;

  return (
    <>
      <Header title="" navigation={navigation} />
      <ImageArea source={{ uri: image }}/>
      <View>
        <Text>Step 4: The Cleaners are ready to work!</Text>
        <Button title="Set Up A Job"/>
        <Button title="Add Another Pair"/>
      </View>
    </>
  )
}

const ImageArea = styled.Image`
  flex: .5;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export default SetupOrAdd;