import React, { useState } from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import Header from '../shared/Header';
import { TextInput } from 'react-native'; 

const OrderNotes = ({ route, navigation }) => {
  const [value, onChangeText] = useState(null); 
  const { image } = route.params;

  return (
    <>
      <Header title="" navigation={navigation} />
      <Container>
        <ImageArea source={{ uri: image }}/>
        <Container>
          <BodyText>
            Notes for Cleaner: 
          </BodyText>
            <View>
              <TextInput 
                placeholder="This step is optional. You will also have the opportunity to speak to the cleaner of choice directly after order is placed"
                style={{ height: 150, width: 350, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 15 }} 
                onChangeText={text => onChangeText(text)} value={value}
           
                returnKeyType='done'
              />
            </View>
          <Button
            title="CONTINUE"
            containerStyle={{paddingTop: 20, width: 350 }}
            buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
            onPress={() => {
              navigation.navigate('SetupOrAdd', {image})
            }}
            />
        </Container>
      </Container>
    </>
  );
};

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
  text-align: center;
  margin-top: 50px;
  color: black;
  font-size: 18px;
`;

export default OrderNotes;