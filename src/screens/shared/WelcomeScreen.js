import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <ImageArea>
        <Image source={require('../../../assets/images/logo-outline.png')} />
      </ImageArea>
      <Button
        title="Sign In"
        containerStyle={{ paddingTop: 20, width: 275, marginVertical: 20 }}
        titleStyle={{ fontFamily: 'Raleway-Bold' }}
        buttonStyle={{
          backgroundColor: '#4a4a4a',
          height: 50,
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate('LogIn')}
      />
      <Text>
        DON'T HAVE AN ACCOUNT?{' '}
        <TextLink onPress={() => navigation.navigate('SignUp')}>
          {' '}
          SIGN UP
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

  font-size: 15px;
`;

const TextLink = styled.Text`
  color: #cbb387;
  font-family: 'Raleway-Bold';
`;

WelcomeScreen.propTypes = {
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(WelcomeScreen);
