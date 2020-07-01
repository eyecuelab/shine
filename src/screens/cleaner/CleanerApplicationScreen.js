import React from 'react';
import { Input } from 'react-native-elements';
import styled from 'styled-components/native';
// import PropTypes from 'prop-types';

const CleanerApplicationScreen = () => {
  return (
    <Container>
      <Input
        label="Business"
        labelStyle={{ fontSize: 20 }}
        placeholder="Name"
      />
      <Input
        label="First Name"
        labelStyle={{ fontSize: 20 }}
        placeholder="First Name"
      />
      <Input
        label="Last Name"
        labelStyle={{ fontSize: 20 }}
        placeholder="Last Name"
      />
      <Input
        label="Email"
        labelStyle={{ fontSize: 20 }}
        placeholder="Last Name"
      />
      <Input
        label="Phone Number"
        labelStyle={{ fontSize: 20 }}
        placeholder="Last Name"
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default CleanerApplicationScreen;
