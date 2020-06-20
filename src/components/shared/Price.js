import React from "react";
import styled from "styled-components/native";

const Price = (dollars, cents) => {
  return (
    <>
      <PriceContianer>
        <DollarSign>$ <DollarsText>{dollars}</DollarsText><CentsText>{cents}</CentsText></DollarSign>
      </PriceContianer>
    </>
  )
}

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

const DollarsText = styled.Text`
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
