import * as React from 'react';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import * as actions from '../../rdx/actions';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const EditProfileScreen = ({ editProfileWatcher, users }) => {
  const [userProfile, setUserProfile] = React.useState({
    street_address: '',
    city: '',
    state: '',
    postal_code: '',
    phone: '',
  });

  const handleProfileChange = (key, value) => {
    setUserProfile((current) => ({
      ...current,
      [key]: value,
    }));
  };

  // FUNCTION FOR CORRECTING PHONE NUMBER:
  const onTextChange = (text) => {
    var cleaned = ('' + text).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? '+1 ' : '',
        number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join(
          '',
        );
      handleProfileChange('phone', number);
      return;
    }
    handleProfileChange('phone', text);
  };

  const inputEl2 = React.useRef(null);
  const inputEl3 = React.useRef(null);
  const inputEl4 = React.useRef(null);
  const inputEl5 = React.useRef(null);
  const inputEl6 = React.useRef(null);
  const navigation = useNavigation();
  const errorMessage = users.errorMessage;

  const street = users.data.included[0].attributes.street_address;
  const city = users.data.included[0].attributes.city;
  const state = users.data.included[0].attributes.state;
  const zip = users.data.included[0].attributes.postal_code;
  const phone = users.data.included[0].attributes.phone;

  const onSubmit = () => {
    editProfileWatcher(userProfile);
    navigation.navigate('Profile');
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <MultiLineInputs>
              <Text>Street</Text>
              <TextInput
                placeholder={street ? street : 'Street Address'}
                returnKeyType="next"
                autoCapitalize="words"
                autoCorrect={false}
                style={styles.input}
                value={userProfile.street_address}
                onChangeText={(text) =>
                  handleProfileChange('street_address', text)
                }
                onSubmitEditing={() => inputEl2.current.focus()}
                // blurOnSubmit={false}
              />
            </MultiLineInputs>
            <MultiLineInputs>
              <Text>City</Text>
              <TextInput
                ref={inputEl2}
                placeholder={city ? city : 'City'}
                returnKeyType="next"
                autoCapitalize="words"
                autoCorrect={false}
                style={styles.input}
                value={userProfile.city}
                onChangeText={(text) => handleProfileChange('city', text)}
                onSubmitEditing={() => inputEl3.current.focus()}
              />
            </MultiLineInputs>
            <MultiLineInputs>
              <Text>State</Text>
              <TextInput
                ref={inputEl3}
                placeholder={state ? state : 'State'}
                returnKeyType="next"
                autoCapitalize="characters"
                autoCorrect={false}
                maxLength={2}
                style={styles.input}
                value={userProfile.state}
                onChangeText={(text) => handleProfileChange('state', text)}
                onSubmitEditing={() => inputEl4.current.focus()}
              />
            </MultiLineInputs>
            <MultiLineInputs>
              <Text>Zip</Text>
              <TextInput
                ref={inputEl4}
                placeholder={zip ? zip : 'Zip'}
                returnKeyType="done"
                keyboardType="number-pad"
                maxLength={5}
                style={styles.input}
                value={userProfile.postal_code}
                onChangeText={(text) =>
                  handleProfileChange('postal_code', text)
                }
                onSubmitEditing={() => inputEl5.current.focus()}
              />
            </MultiLineInputs>
            <MultiLineInputs>
              <Text>Phone</Text>
              <TextInput
                ref={inputEl5}
                placeholder={phone ? phone : '(xxx)-xxx-xxxx'}
                returnKeyType="done"
                textContentType="telephoneNumber"
                dataDetactorTypes="phoneNunmber"
                keyboardType="phone-pad"
                maxLength={10}
                style={styles.input}
                value={userProfile.phone}
                onChangeText={(text) => onTextChange(text)}
                // onSubmitEditing={() => inputEl6.current.focus()}
              />
            </MultiLineInputs>
            {/* <TextInput
              ref={inputEl6}
              placeholder="Upload Iamge"
              returnKeyType="done"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              value={userProfile.image_file}
              onChangeText={(text) => handleProfileChange('image_file', text)}
              onSubmitEditing={() => inputEl3.current.focus()}
            /> */}

            <ErrorTextContainer>
              <ErrorText>
                {errorMessage !== null ? errorMessage : null}
              </ErrorText>
            </ErrorTextContainer>

            <Button
              title="SUBMIT"
              containerStyle={{ paddingTop: 20, width: 350 }}
              buttonStyle={{
                backgroundColor: 'black',
                height: 50,
                borderRadius: 7,
              }}
              onPress={onSubmit}
            />
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    width: width * 0.6,
    marginVertical: 5,
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#161F3D',
  },
});

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-right: 10px;
`;

const MultiLineInputs = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const ErrorTextContainer = styled.View`
  margin-horizontal: 20px;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.Text`
  color: #8e1818;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

EditProfileScreen.propTypes = {
  editProfileWatcher: PropTypes.func,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, actions)(EditProfileScreen);
