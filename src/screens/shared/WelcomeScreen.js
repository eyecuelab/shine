import React from 'react';
import styled from "styled-components";
import Header from "../../components/shared/Header";
import TakePhoto from '../../components/order/TakePhoto'


export default WelcomeScreen = ({ navigation }) => {
  return (
    <>
     <Header title="Welcome" navigation={navigation} />
     <TakePhoto/>
    </>
  )
};  

