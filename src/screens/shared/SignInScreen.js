/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
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
import { Feather } from '@expo/vector-icons';
import * as actions from '../../rdx/actions';
import PropTypes from 'prop-types';
import UniversalButton from '../../components/shared/UniversalButton';

const { width } = Dimensions.get('window');

const SignInScreen = ({ loginWatcher, users, setWrongError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureTextEntry = () => {
    setSecureTextEntry((previousState) => !previousState);
  };
  const errorMessage = users.errorMessage;
  const navigation = useNavigation();

  useEffect(() => {
    setWrongError();
  }, [email, password]);

  const onSubmit = () => {
    loginWatcher({ email: email, password: password });
    // navigation.navigate('Profile');
  };
  useEffect(() => {
    console.log('NAVIGATION: ', navigation);
    if (users.status === 'Logged in') {
      if (users.redirect) {
        navigation.navigate('NewOrder');
      }
      if (!users.redirect) {
        navigation.navigate('Profile');
      }
    }
  }, [users.status]);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            {/* <ImageArea>
              <Image
                source={require('../../../assets/images/logo-outline.png')}
              />
            </ImageArea> */}
            <TextInput
              placeholder="Email"
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <InputContainer>
              <TextInput
                placeholder="Password"
                returnKeyType="done"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={password}
                secureTextEntry={secureTextEntry}
                onChangeText={setPassword}
                onSubmitEditing={onSubmit}
              />
              <SecureButton onPress={toggleSecureTextEntry}>
                {secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </SecureButton>
            </InputContainer>
            {errorMessage !== null ? (
              <ErrorTextContainer>
                <Text>{errorMessage}</Text>
              </ErrorTextContainer>
            ) : null}

            <UniversalButton title={'Sign In'} onPress={onSubmit} width={225} />
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
    width: width * 0.85,
    marginVertical: 5,
    // marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#161F3D',
  },
});

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const InputContainer = styled.View`
  flex-direction: row;
`;

const SecureButton = styled.TouchableOpacity`
  position: absolute;
  margin-left: 300px;
  margin-top: 15px;
`;

const ErrorTextContainer = styled.View`
  margin-horizontal: 20px;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: #8e1818;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

SignInScreen.propTypes = {
  loginWatcher: PropTypes.func,
  users: PropTypes.object,
  setWrongError: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, actions)(SignInScreen);
