/* eslint-disable no-undef */
import React, { useState, useRef, useEffect } from 'react';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as actions from '../../rdx/actions';
import PropTypes from 'prop-types';
import UniversalButton from '../../components/shared/UniversalButton';

const { width } = Dimensions.get('window');

const SignUpScreen = ({ signupWatcher, users, confirmUser }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [matchError, setMatchError] = useState('');

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureTextEntry = () => {
    setSecureTextEntry((previousState) => !previousState);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [authCode, setAuthCode] = useState('');

  const statusMessage = users.signupMessage;

  const navigation = useNavigation();

  const inputE11 = useRef(null);
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);
  const inputEl5 = useRef(null);

  useEffect(() => {
    setEmailError('');
  }, [password, confirmPassword]);

  useEffect(() => {
    if (users.signupMessage === 'Sign Up Successful!') {
      setModalVisible(true);
    }
  }, [users.signupMessage]);

  useEffect(() => {
    if (users.confirmationMessage === 'Account Confirmed!') {
      setModalVisible(false);
      navigation.navigate('LogIn');
    }
  }, [users.confirmationMessage]);

  const onSignUp = () => {
    if (password !== confirmPassword) {
      setEmailError('Passwords Do Not Match');
    } else if (firstName.length === 0 || lastName.length === 0) {
      setEmailError('Please Fill Out All Required Fields');
    } else if (password.length < 6 || password.length > 10) {
      setEmailError('Password should contain 6-10 characters');
    } else {
      signupWatcher({
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
      });
    }
  };

  const onSetEmail = () => {
    // eslint-disable-next-line no-useless-escape
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (email.match(mailformat)) {
    //   (inputE12) => inputE12.current.focus();
    //   setEmailError('');
    // } else {
    // setEmailError('Please Enter a Valid Email Address');
    // }
  };

  const onSubmit = () => {
    confirmUser({
      code: authCode,
    });
    // setModalVisible(false);
    // navigation.navigate('LogIn');
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Modal
              hasBackdrop={true}
              hideModalContentWhileAnimating={true}
              animationIn={'slideInUp'}
              animationOut={'slideOutDown'}
              animationInTiming={1000}
              animationOutTiming={3000}
              backdropTransitionInTiming={1000}
              backdropTransitionOutTiming={1000}
              isVisible={modalVisible}
              onBackdropPress={() => setModalVisible(false)}
              swipeDirection={['down']}
              onSwipeComplete={() => setModalVisible(false)}
            >
              <ModalContainer>
                <ModalView>
                  <ModalHeader>
                    <HeaderText>Welcome to Shine {firstName}! </HeaderText>
                  </ModalHeader>
                  <ModalItem>
                    <Text>A Confirmation Code has been sent to {email}</Text>
                  </ModalItem>
                  <ModalItem>
                    <CodeTextInput
                      placeholder="Your Authorization Code"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={authCode}
                      onChangeText={setAuthCode}
                    />
                  </ModalItem>
                  <ModalItem>
                    <ErrorText>{users.confirmationMessage}</ErrorText>
                  </ModalItem>
                  <ModalConfirm onPress={() => onSubmit()}>
                    <ConfirmText>Confirm and Continue</ConfirmText>
                  </ModalConfirm>
                </ModalView>
              </ModalContainer>
            </Modal>
            <TextInput
              ref={inputE11}
              placeholder="Email"
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={() => inputEl2.current.focus()}
              onEndEditing={() => onSetEmail()}
            />
            <TextInput
              ref={inputEl2}
              placeholder="First Name"
              returnKeyType="next"
              autoCapitalize="words"
              autoCorrect={false}
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              onSubmitEditing={() => inputEl3.current.focus()}
            />
            <TextInput
              ref={inputEl3}
              placeholder="Last Name"
              returnKeyType="next"
              autoCapitalize="words"
              autoCorrect={false}
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              onSubmitEditing={() => inputEl4.current.focus()}
            />
            <InputContainer>
              <TextInput
                ref={inputEl4}
                placeholder="Password"
                returnKeyType="done"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={password}
                secureTextEntry={secureTextEntry}
                onChangeText={setPassword}
                onSubmitEditing={() => inputEl5.current.focus()}
              />
              <SecureButton onPress={toggleSecureTextEntry}>
                {secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </SecureButton>
            </InputContainer>
            <InputContainer>
              <TextInput
                ref={inputEl5}
                placeholder="Confirm Password"
                returnKeyType="done"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={confirmPassword}
                secureTextEntry={secureTextEntry}
                onChangeText={setConfirmPassword}
                // onSubmitEditing={onSubmit}
              />
              <SecureButton onPress={toggleSecureTextEntry}>
                {secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </SecureButton>
            </InputContainer>
            {statusMessage !== null ? (
              <MessageContainer>
                <Text>{statusMessage}</Text>
              </MessageContainer>
            ) : null}
            {emailError.length !== 0 ? (
              <MessageContainer>
                <ErrorText>{emailError}</ErrorText>
              </MessageContainer>
            ) : null}
            <UniversalButton title={'Sign Up'} onPress={onSignUp} width={320} />
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

const InputContainer = styled.View`
  flex-direction: row;
`;

const SecureButton = styled.TouchableOpacity`
  position: absolute;
  margin-left: 300px;
  margin-top: 15px;
`;

const MessageContainer = styled.View`
  margin-horizontal: 20px;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const ConfirmText = styled.Text`
  color: blue;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

const CodeTextInput = styled.TextInput`
  width: 80%;
  padding: 10px;
  border-width: 1px;
  border-color: black;
`;

const ErrorText = styled.Text`
  color: #8e1818;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const ModalContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  background-color: white;
`;

const ModalView = styled.View`
  width: 100%;
  margin-bottom: 20px;

  justify-content: flex-end;
  align-items: center;
`;

const ModalHeader = styled.View`
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
  padding-horizontal: 25px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ModalItem = styled.View`
  width: 100%;
  padding-top: 20px;
  padding-horizontal: 25px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ModalConfirm = styled.TouchableOpacity`
  width: 100%;
  padding-top: 20px;
`;

SignUpScreen.propTypes = {
  signupWatcher: PropTypes.func,
  confirmUser: PropTypes.func,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, actions)(SignUpScreen);
