import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

const SetupOrAdd = ({ image, jumpTo, navigation }) => {

  return (
    <>
      <ImageArea source={{ uri: image }}/>
    
      <Container>
        <BodyText>The Cleaners are ready to work!</BodyText>
        <Button
          title="SET UP JOB"
          containerStyle={{paddingTop: 20, width: 350 }}
          buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
          onPress={() => {
            navigation.navigate('Log in', {image})
          }}
        />
        <Button
          title="ADD ANOTHER PAIR"
          containerStyle={{paddingTop: 20, width: 350 }}
          buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
          onPress={() => {
            navigation.navigate('Home', {image})
            // jumpTo('first')
          }}
        />
        </Container>
    </>
  );
}

const ImageArea = styled.Image`
  flex: .75;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  background: white;
  flex: 1;
  align-items: center;
`;

const BodyText = styled.Text`
  font-weight: bold
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
  color: black;
  font-size: 18px;
`;

export default SetupOrAdd;