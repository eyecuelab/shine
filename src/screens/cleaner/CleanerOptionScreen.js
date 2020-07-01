/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

const CleanerOptionScreen = ({ navigation }) => {
  return (
    <>
      <Container>
        <ImageArea>
          <Image source={require('../../../assets/images/logo-outline.png')} />
        </ImageArea>
        <Button
          title="APPLY TO BE A CLEANER"
          containerStyle={{ paddingTop: 20, width: 350, marginVertical: 20 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate('Cleaner Application')}
        />
        <Text>
          Already have a cleaner account?{' '}
          <TextLink onPress={() => navigation.navigate('Log in')}>
            {' '}
            Log in
          </TextLink>
        </Text>
      </Container>
    </>
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

CleanerOptionScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CleanerOptionScreen;
