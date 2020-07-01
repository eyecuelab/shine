import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import styled from 'styled-components/native';
// import PropTypes from 'prop-types';

const CleanerApplicationScreen = () => {
  const [appInfo, setAppInfo] = useState({
    businessName: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  console.log(appInfo.businessName);
  // TO DO:
  // Add Icons, setState functions and flex styling. Check with API for correct information.
  return (
    <Container>
      <Input
        label="Business"
        labelStyle={{ fontSize: 20 }}
        placeholder="Name"
      />
      <Input
        label="Contact Name"
        labelStyle={{ fontSize: 20 }}
        placeholder="First Name"
      />
      <Input placeholder="Last Name" />
      <Input label="Email" labelStyle={{ fontSize: 20 }} placeholder="Email" />
      <Input
        label="Phone Number"
        labelStyle={{ fontSize: 20 }}
        placeholder="Phone Number"
      />
      <Input
        label="Address"
        labelStyle={{ fontSize: 20 }}
        placeholder="Street"
      />
      <Input placeholder="City" />
      <Input placeholder="State" />
      <Input placeholder="postalCode" />
      <Input label="Bio" labelStyle={{ fontSize: 20 }} placeholder="Bio" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default CleanerApplicationScreen;
