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
import { Feather } from '@expo/vector-icons';
import * as actions from '../../rdx/actions';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const SignUpScreen = ({ signupWatcher, users }) => {
  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const toggleSecureTextEntry = () => {
    setSecureTextEntry((previousState) => !previousState);
  };

  const statusMessage = users.signupMessage;
  const navigation = useNavigation();

  const onSubmit = () => {
    signupWatcher({
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
    });
    // TODO: add modal to confrim signed up status and route to login page
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
            <TextInput
              placeholder="First Name"
              returnKeyType="next"
              autoCapitalize="words"
              autoCorrect={false}
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              placeholder="Last Name"
              returnKeyType="next"
              autoCapitalize="words"
              autoCorrect={false}
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
            />
            <InputContainer>
              <TextInput
                placeholder="Password"
                returnKeyType="done"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry}
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
              <ErrorTextContainer>
                <Text>{statusMessage}</Text>
              </ErrorTextContainer>
            ) : null}

            <Button
              title="Sign up"
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

SignUpScreen.propTypes = {
  signupWatcher: PropTypes.func,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, actions)(SignUpScreen);
