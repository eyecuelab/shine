import React from 'react';
import styled from "styled-components/native";
import { Button } from 'react-native-elements';

const SignUpScreen = ({ navigation }) => {
  return (
    <Container>
      <Button
        title="Sign up with Email"
        containerStyle={{paddingTop: 20, width: 350, marginVertical: 20 }}
        buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
        onPress={() => navigation.navigate('Sign up')}
      />
      <Text>Already have an account? <TextLink onPress={() => navigation.navigate('Log in')}> Log in</TextLink></Text>
      
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 16px;
`;

const TextLink = styled.Text`
  color: #CBB387;
  font-size: 16px;
  font-weight: 500;
`;


export default SignUpScreen;