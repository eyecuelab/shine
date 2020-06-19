import React from "react";
import styled from "styled-components/native";

const Price = () => {
  return (
    <>
      <PriceTextContainer>
        <BodyText>ROUGH EST.</BodyText>
      </PriceTextContainer>
      <PriceContianer>
        <DollarSign>$ <DallarsText>35</DallarsText><CentsText>99</CentsText></DollarSign>
      </PriceContianer>
    </>
  )
}

const PriceTextContainer = styled.View`
  margin-right: 110px;
  border: 5px
  border-color: black;
`;

const BodyText = styled.Text`
  text-align: left;
  margin: 15px 0px 0px 30px;
  color: black;
  font-size: 18px;
`;

const PriceContianer = styled.View`
  border: 5px
  border-color: black;
`;

const DollarSign = styled.Text`
  align-items: flex-start;
  color: black;
  font-size: 25px;
  font-family: Marison-Sans-Round;
`;

const DallarsText = styled.Text`
  color: black;
  font-size: 100px;
  font-family: Marison-Script-Vintage;
`;

const CentsText = styled.Text`
  color: black;
  font-size: 80px;
  font-family: Marison-Script-Vintage;
  text-decoration-line: underline;
`;

export default Price;
