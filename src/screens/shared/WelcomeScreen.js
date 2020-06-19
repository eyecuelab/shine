import React, { useState } from 'react';
import Header from "../../components/shared/Header";
import TakePhoto from '../../components/order/TakePhoto';



const WelcomeScreen = ({ navigation }) => {

  const [screenView, setScreenView ] = useState('TakePhoto');

  return (
    <>
      <Header title="Welcome" navigation={navigation} />
      {/* <TakePhoto onContinue={screenView}/> */}
    </>
  )

};  






export default WelcomeScreen;

