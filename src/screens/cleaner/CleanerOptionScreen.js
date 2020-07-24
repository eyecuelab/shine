/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import * as actions from '../../rdx/actions';
import { connect } from 'react-redux';
import UniversalButton from '../../components/shared/UniversalButton';

const CleanerOptionScreen = ({ users, navigation }) => {
  // console.log('ORDERS: ', orders);
  return (
    <>
      <Container>
        <ImageArea>
          <Image source={require('../../../assets/images/logo-outline.png')} />
        </ImageArea>
        <UniversalButton
          title={'APPLY'}
          width={230}
          onPress={() => navigation.navigate('Cleaner Application')}
        />
        {users.status !== 'Logged in' ? (
          <>
            <Text>ALREADY A CLEANER? </Text>
            <TextLink onPress={() => navigation.navigate('Log in')}>
              {' '}
              LOG IN
            </TextLink>
          </>
        ) : null}
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
  font-family: Raleway-Medium
  text-align: center;
  width: 250px
  color: #4a4a4a;
  font-size: 15px;
  margin-top: 20px;
`;

const TextLink = styled.Text`
  margin-top: 5px;
  color: #cbb387;
  font-size: 16px;
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
  users: PropTypes.object,
};

export default connect(mapStateToProps, actions)(CleanerOptionScreen);
