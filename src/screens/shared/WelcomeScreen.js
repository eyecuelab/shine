/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';
import UniversalButton from '../../components/shared/UniversalButton';

const WelcomeScreen = ({ navigation, setConfirmationStatus }) => {
  const onSubmit = () => {
    setConfirmationStatus();
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <ImageArea>
        <Image source={require('../../../assets/images/logo-outline.png')} />
      </ImageArea>
      <UniversalButton
        title={'SIGN IN'}
        width={275}
        onPress={() => navigation.navigate('LogIn')}
      />

      <Text>
        DON'T HAVE AN ACCOUNT?{' '}
        <TextLink onPress={() => onSubmit()}> SIGN UP</TextLink>
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
  width: 275px;
  height: 275px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Text = styled.Text`
  color: black;
  font-family: 'Raleway-Regular';
  margin-top: 20px;
  font-size: 15px;
`;

const TextLink = styled.Text`
  color: #cbb387;
  font-family: 'Raleway-Bold';
  font-size: 15px;
`;

WelcomeScreen.propTypes = {
  users: PropTypes.object,
  navigation: PropTypes.object,
  setConfirmationStatus: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, actions)(WelcomeScreen);
