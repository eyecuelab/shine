import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const SetupOrAdd = ({ route, navigation }) => {
  const { image } = route.params;

  return (
    <>
      <ImageArea source={{ uri: image }}/>
      <View>
        <Text>Step 4: The Cleaners are ready to work!</Text>
        <Button
            title="SETUP A JOB"
            containerStyle={{paddingTop: 20, width: 350 }}
            buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
            onPress={() => {
              navigation.navigate('OrdersList', {image})
            }}
          />
        <Button
          title="ADD ANOTHER PAIR"
          containerStyle={{paddingTop: 20, width: 350 }}
          buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
          onPress={() => {
            navigation.navigate('SelectPhoto', {image})
          }}
        />
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