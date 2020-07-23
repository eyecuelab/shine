import React from 'react';
import { View, Keyboard, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import ShoePhoto from '../shared/ShoePhoto';
import PropTypes from 'prop-types';
import ScrollViewContainer from '../shared/ScrollViewContainer';
import UniversalButton from '../../components/shared/UniversalButton';

const OrderNotes = ({ image, jumpTo, note, setNote }) => {
  return (
    <ScrollViewContainer>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        {ShoePhoto(image)}
        <Container>
          <BodyText>NOTES FOR CLEANER</BodyText>
          <View>
            <TextInput
              placeholder="This step is optional. You will also have the opportunity to speak to the cleaner of choice directly after order is placed"
              style={{
                height: 115,
                width: 350,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                padding: 15,
                paddingTop: 10,
                fontSize: 18,
                fontFamily: 'Raleway-Regular',
              }}
              scrollEnabled={false}
              onChangeText={(text) => setNote(text)}
              value={note}
              multiline={true}
              editable={true}
              onSubmitEditing={Keyboard.dismiss}
              returnKeyType="done"
              allowFontScaling={true}
            />
          </View>
          <UniversalButton
            title={'CONTINUE'}
            width={350}
            onPress={() => {
              jumpTo('fourth');
            }}
          />
        </Container>
      </KeyboardAwareScrollView>
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
});

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const BodyText = styled.Text`
  font-family: Raleway-Bold
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #4a4a4a;
  font-size: 15px;
`;

OrderNotes.propTypes = {
  image: PropTypes.any,
  jumpTo: PropTypes.func,
  note: PropTypes.string,
  setNote: PropTypes.func,
};

export default OrderNotes;
