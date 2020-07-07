import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { signupWatcher } from '../../rdx/actions';
import PropTypes from 'prop-types';

const WelcomeScreen = ({ navigation, signupWatcher }) => {
  const user = {
    first_name: 'Jieun',
    last_name: 'Kang',
    email: 'example5@example.com',
    password: 'theshoe',
  };

  return (
    <Container>
      <ImageArea>
        <Image source={require('../../../assets/images/logo-outline.png')} />
      </ImageArea>
      <Button
        title="Sign up with Email"
        containerStyle={{ paddingTop: 20, width: 350, marginVertical: 20 }}
        buttonStyle={{ backgroundColor: 'black', height: 50, borderRadius: 7 }}
        // onPress={() => navigation.navigate('SignUp')}
        onPress={() => signupWatcher(user)}
      />
      <Text>
        Already have an account?{' '}
        <TextLink onPress={() => navigation.navigate('LogIn')}>
          {' '}
          Log in
        </TextLink>
      </Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ImageArea = styled.View`
  width: 200px;
  height: 200px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Text = styled.Text`
  color: black;
  font-size: 16px;
`;

const TextLink = styled.Text`
  color: #cbb387;
  font-size: 18px;
  font-weight: 600;
`;

WelcomeScreen.propTypes = {
  signupWatcher: PropTypes.func,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupWatcher: (user) => dispatch(signupWatcher(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
