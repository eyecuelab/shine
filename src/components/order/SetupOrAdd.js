import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import Header from '../shared/Header';
import { Button } from 'react-native-elements';

const SetupOrAdd = ({ image }) => {
 

  return (
    <>
      {/* <Header title="" navigation={navigation} /> */}
      <ImageArea source={{ uri: image }}/>
    
      <Container>
        <BodyText>The Cleaners are ready to work!</BodyText>
        <Button
            title="SET UP JOB"
            containerStyle={{paddingTop: 20, width: 350 }}
            buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
          />
        <Button
            title="ADD ANOTHER PAIR"
            containerStyle={{paddingTop: 20, width: 350 }}
            buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
        />
        </Container>
     

    </>
  )
}

const ImageArea = styled.Image`
  flex: .5;
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