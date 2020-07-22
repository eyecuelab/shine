/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import * as actions from '../../rdx/actions';
import { connect } from 'react-redux';
import UniversalButton from '../../components/shared/UniversalButton';

const CleanerOptionScreen = ({ navigation }) => {
  // console.log('ORDERS: ', orders);
  return (
    <>
      <Container>
        <ImageArea>
          <Image source={require('../../../assets/images/logo-outline.png')} />
        </ImageArea>
        <UniversalButton
          title={'APPLY TO BE A CLEANER'}
          width={275}
          onPress={() => navigation.navigate('Cleaner Application')}
        />

        <Text>
          ALREADY A CLEANER?{' '}
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
  width: 275px;
  height: 275px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Text = styled.Text`
  font-family: Raleway-Regular
  text-align: center;
  width: 250px
  color: black;
  font-size: 15px;
  margin-top: 20px;
`;

const TextLink = styled.Text`
  color: #cbb387;
  font-family: 'Raleway-Bold';
`;

const mapStateToProps = (state) => {
  return {
    users: state.users,
    orders: state.orders,
  };
};

CleanerOptionScreen.propTypes = {
  navigation: PropTypes.object,
  loadOrders: PropTypes.func,
};

export default connect(mapStateToProps, actions)(CleanerOptionScreen);
