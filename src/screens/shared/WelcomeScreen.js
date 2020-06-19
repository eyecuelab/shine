import React, { useState, useEffect } from 'react';
import Header from "../../components/shared/Header";
import TakePhoto from '../../components/order/TakePhoto';
import styled from "styled-components/native";
import { ScrollView, Switch } from "react-native";

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

