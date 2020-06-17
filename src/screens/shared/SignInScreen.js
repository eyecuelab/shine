import React from 'react';
import Header from "../../components/shared/Header";
import styled from "styled-components/native";
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native'; 


const SignInScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const { signIn } = React.useContext(AuthContext);

  return (
    <>
      <Container>
        {/* Shine logo will be in here! */}
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Log in"
          containerStyle={{paddingTop: 20, width: 350 }}
          buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
          // onPress={() => signIn({ username, password })} 
        />
      </Container>
    </>
  )
};  

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

export default SignInScreen;