import React, { useState } from 'react';
import Header from '../../components/shared/Header';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Welcome" navigation={navigation} />
    </>
  );
};

export default WelcomeScreen;
