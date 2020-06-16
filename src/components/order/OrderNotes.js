import React, { useState } from 'react';
import {View, Keyboard, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import Header from '../shared/Header';
import { TextInput } from 'react-native'; 

const OrderNotes = ({ image, jumpTo }) => {
  const [value, onChangeText] = useState(null); 
  // const { image } = route.params;

  return (
    <>
      {/* <Header title="" navigation={navigation} /> */}
      <KeyboardAvoidingView style={{flex: 1 }} behavior="padding">
      <Container>
        <ImageArea source={{ uri: image }}/>  
        <Container>
          <BodyText>
            Notes for Cleaner 
          </BodyText>
            <View>
              <TextInput 
                placeholder="This step is optional. You will also have the opportunity to speak to the cleaner of choice directly after order is placed"
                style={{ height: 200, width: 350, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 15, paddingTop: 10, fontSize: 20}} 
                onChangeText={text => onChangeText(text)} value={value}
                multiline={true}
                editable={true}
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType='done'
                allowFontScaling={true}
              />
            </View>
          <Button
            title="CONTINUE"
            containerStyle={{paddingTop: 20, width: 350 }}
            buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
            onPress={() => {
              jumpTo('fourth')}
            }
            />
        </Container>
      </Container>
      </KeyboardAvoidingView >
    </>
  );
};

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

export default OrderNotes;