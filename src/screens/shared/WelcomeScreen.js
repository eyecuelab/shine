import React, { useState } from 'react';
import Header from '../../components/shared/Header';
import Price from '../../components/shared/Price';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Welcome" navigation={navigation} />
      {Price(12.99)}
    </>
  );
};

export default WelcomeScreen;
