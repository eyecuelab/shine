import React, { useState } from 'react';
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components/native";
import AdditionalServiceSwitch from "../../components/order/AdditionalServiceSwitch";
import Price from "../../components/shared/Price";

const OrderDetailScreen = () => {
  const route = useRoute();
  const { image } = route.params;

  

  return (
    <>
      <ImageArea source={{ uri: image }}/>
      <Container>
        <BodyTextContainer>
          <BodyText>ADD POLISH</BodyText>
          <BodyText>ADD RAIN PROTECTION</BodyText>
          <BodyText>REPLACE SHOELACES</BodyText>
        </BodyTextContainer>
        <SwitchContainer>
          <AdditionalServiceSwitch />
        </SwitchContainer>
        <Price />
      </Container>
    </>
  );
};  

const ImageArea = styled.Image`
  flex: .75;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  background: white;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BodyTextContainer = styled.View`
  margin: 50px 90px 30px 0px;
`;

const BodyText = styled.Text`
  text-align: left;
  margin: 15px 0px 0px 30px;
  color: black;
  font-size: 18px;
`;

const SwitchContainer = styled.View`
  margin: 50px 0px 30px 0px
  padding-top: 10px;
  border: 5px
  border-color: black;
`;



export default OrderDetailScreen;