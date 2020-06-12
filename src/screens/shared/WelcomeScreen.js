import React, { useState } from 'react';
import Header from "../../components/shared/Header";
import TakePhoto from '../../components/order/TakePhoto';
// import OrderSpecs from '../../components/order/OrderSpecs';
// import SetupOrAdd from '../../components/order/SetupOrAdd';

const WelcomeScreen = ({ navigation }) => {
  const [screenView, setScreenView ] = useState('TakePhoto');

  return (
    <>
      <Header title="Welcome" navigation={navigation} />
      {/* <TakePhoto onContinue={screenView}/> */}
      {/* <OrderSpecs /> */}
      {/* <SetupOrAdd /> */}
      <TakePhoto />
    </>
  )
};  

export default WelcomeScreen;

