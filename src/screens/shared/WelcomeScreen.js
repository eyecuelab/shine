import React, { useState } from 'react';
import Header from '../../components/shared/Header';
import TakePhoto from '../../components/order/TakePhoto';
import Dash from '../../components/shared/Dash';
import Price from '../../components/shared/Price';

const WelcomeScreen = ({ navigation }) => {
  const [screenView, setScreenView] = useState('TakePhoto');

  return (
    <>
      <Header title="Welcome" navigation={navigation} />
      <Dash />
      {Price(35, 99)}
      {/* <TakePhoto onContinue={screenView}/> */}
    </>
  );
};

export default WelcomeScreen;
