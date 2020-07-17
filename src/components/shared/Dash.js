import React from 'react';
import { Dimensions } from 'react-native';
import Dash from 'react-native-dash';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const DashedLine = () => {
  return (
    <Container>
      <Dash style={{ width: width * 0.8 }} dashColor="#E6E6E6" dashGap={5} />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-vertical: 30px;
`;

export default DashedLine;
