import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Dimensions, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as actions from '../../rdx/actions';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const SignInScreen = ({ loginWatcher, users }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const toggleSecureTextEntry = () => {
    setSecureTextEntry((previousState) => !previousState);
  };
  const errorMessage = users.authMessage;
  const navigation = useNavigation();

  const onSubmit = () => {
    loginWatcher({ email: email, password: password });
    navigation.navigate('Profile');
  };

  return (
    <>
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
        <InputContainer>
          <TextInput
            placeholder="Password"
            returnKeyType="done"
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
        {errorMessage !== null ? (
          <ErrorTextContainer>
            <Text>{errorMessage}</Text>
          </ErrorTextContainer>
        ) : null}

        <Button
          title="Log in"
          containerStyle={{ paddingTop: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={onSubmit}
        />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
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

SignInScreen.propTypes = {
  loginWatcher: PropTypes.func,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginWatcher: (user) => dispatch(loginWatcher(user)),
//   };
// };

export default connect(mapStateToProps, actions)(SignInScreen);
