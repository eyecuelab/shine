import React from 'react';
import Header from '../../components/shared/Header';
import Price from '../../components/shared/Price';
import PropTypes from 'prop-types';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Welcome" navigation={navigation} />
      {Price(12.99)}
    </>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default WelcomeScreen;
