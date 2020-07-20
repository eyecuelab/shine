import React from 'react';
import styled from 'styled-components/native';

const PriceTagBlack = (price) => {
  const dollars = price.toString().split('.')[0];
  const cents = price.toString().split('.')[1];
  return (
    <>
      <PriceContianer>
        <SignContainer>
          <DollarSign>$</DollarSign>
        </SignContainer>
        <DollarContainer>
          <DollarsText>{dollars}</DollarsText>
        </DollarContainer>
        <CentsContainer>
          <CentsText>{cents}</CentsText>
        </CentsContainer>
      </PriceContianer>
    </>
  );
};

const PriceContianer = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SignContainer = styled.View``;

const DollarSign = styled.Text`
  color: black;
  font-size: 22px;
  font-family: Marison-Sans-Round;
`;

const DollarContainer = styled.View``;

const DollarsText = styled.Text`
  color: black;
  font-size: 120px;
  font-family: Marison-Script-Vintage;
`;

const CentsContainer = styled.View``;

const CentsText = styled.Text`
  color: black;
  font-size: 60px;
  font-family: Marison-Script-Vintage;
  text-decoration-line: underline;
`;

export default PriceTagBlack;
