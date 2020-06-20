import React, { useState } from 'react';
import {View, Keyboard, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native'; 
import ScrollViewContainer from '../shared/ScrollViewContainer';
import Image from '../shared/Image';
import PropTypes from 'prop-types';

const OrderNotes = ({ image, jumpTo }) => {
  const [value, onChangeText] = useState(null); 
  // console.log(value)
  return (
    <>
      <ScrollViewContainer>
        {Image(image)}
        <KeyboardAvoidingView style={{flex: 1 }} behavior="padding">
          <Container>
            <BodyText>
              Notes for Cleaner 
            </BodyText>
              <View>
                <TextInput 
                  placeholder="This step is optional. You will also have the opportunity to speak to the cleaner of choice directly after order is placed"
                  style={{ height: 200, width: 350, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 15, paddingTop: 10, fontSize: 20}} 
                  onChangeText={text => onChangeText(text)} 
                  value={value}
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
        </KeyboardAvoidingView >
      </ScrollViewContainer>
    </>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const BodyText = styled.Text`
  font-weight: bold
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
  color: black;
  font-size: 18px;
`;

OrderNotes.propTypes = {
  image: PropTypes.any,
  jumpTo: PropTypes.func,
}

export default OrderNotes;