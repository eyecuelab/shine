import React, { useState } from 'react';
import Header from '../../components/shared/Header';
import axios from "axios";

const WelcomeScreen = ({ navigation }) => {



  // const logIn = () => axios.post(`https://shoeshine.herokuapp.com/login`, {
  //   "email": "example@example.com", 
  //   "password": "theshoe"
  // })
  // .then((response) => {
  //   console.log(response);
  // }, (error) => {
  //   console.log(error);
  // });

  return (
    <>
      <Header title="Welcome" navigation={navigation} />
    </>
  );
};

export default WelcomeScreen;
