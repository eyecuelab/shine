import React from 'react';
import styled from 'styled-components/native';

const Price = (dollars, cents) => {
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

// const PriceContianer = styled.View`
//   flex: 1;
//   flex-direction: row;
//   margin: 0px 30px;
//   align-items: center;
//   justify-content: center;
// `;

// const PriceContianer = styled.View`
//   border: 1px solid black;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
//   width: 50%;
//   position: relative;
//   margin: 0px 30px;
// `;

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
  font-size: 70px;
  font-family: Marison-Script-Vintage;
  text-decoration-line: underline;
`;

export default Price;
