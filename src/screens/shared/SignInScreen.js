import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { Dimensions, TextInput, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const SignInScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const { signIn } = React.useContext(AuthContext);

  return (
    <>
      <Container>
        {/* Shine logo will be in here! */}
        <TextInput
          placeholder="Email"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          returnKeyType="done"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Log in"
          containerStyle={{ paddingTop: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          // onPress={() => signIn({ username, password })}
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
`;

const Text = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export default SignInScreen;
