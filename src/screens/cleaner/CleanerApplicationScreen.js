import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { StyleSheet, ScrollView, TextInput } from 'react-native';
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
    <ScrollView>
      <Container>
        <Input
          label="Business"
          labelStyle={{ fontSize: 20 }}
          placeholder="Name"
        />
        <MultiLineInputs>
          <Input
            containerStyle={{ flex: 1 }}
            label="Contact Name"
            labelStyle={{ fontSize: 20 }}
            placeholder="First Name"
          />
          <Input
            containerStyle={{ flex: 1 }}
            label=""
            labelStyle={{ fontSize: 20 }}
            placeholder="Last Name"
          />
        </MultiLineInputs>
        <Input
          label="Email"
          labelStyle={{ fontSize: 20 }}
          placeholder="Email"
        />
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
        <MultiLineInputs>
          <Input placeholder="City" containerStyle={{ flex: 2 }} />
          <Input placeholder="State" containerStyle={{ flex: 1 }} />
        </MultiLineInputs>
        <Input placeholder="Zip" />

        <Input
          label="Bio"
          multiline={true}
          numberOfLines={2}
          labelStyle={{ fontSize: 20 }}
          placeholder="Bio"
        />
      </Container>
    </ScrollView>
  );
};

const MultiLineInputs = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const Container = styled.View`
  margin: 10px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default CleanerApplicationScreen;
