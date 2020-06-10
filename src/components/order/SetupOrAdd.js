import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const SetupOrAdd = () => {
  return (
    <View>
      <Text>Step 4: The Cleaners are ready to work!</Text>
      <Button title="Set Up A Job"/>
      <Button title="Add Another Pair"/>
    </View>
  )
}

export default SetupOrAdd;