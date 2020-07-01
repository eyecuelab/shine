import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
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
    bio: '',
  });
  const [cleanerAddress, setCleanerAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleInfoChange = (key, value) => {
    setAppInfo((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleAddressChange = (key, value) => {
    setCleanerAddress((current) => ({
      ...current,
      [key]: value,
    }));
  };
  // FUNCTION FOR CORRECTING PHONE NUMBER:
  const onTextChange = (text) => {
    var cleaned = ('' + text).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? '+1 ' : '',
        number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join(
          '',
        );
      handleInfoChange('phoneNumber', number);
      return;
    }
    handleInfoChange('phoneNumber', text);
  };

  const handleSubmit = () => {
    console.log(appInfo);
    console.log(cleanerAddress);
  };

  // TO DO:
  // Add Icons, setState functions and flex styling. Check with API for correct information.
  return (
    <ScrollView>
      <Container>
        <Input
          label="Business"
          labelStyle={{ fontSize: 20 }}
          placeholder="Name"
          autoCorrect={false}
          onChangeText={(text) => handleInfoChange('businessName', text)}
        />
        <MultiLineInputs>
          <Input
            containerStyle={{ flex: 1 }}
            label="Contact Name"
            labelStyle={{ fontSize: 20 }}
            placeholder="First Name"
            autoCompleteType={'name'}
            onChangeText={(text) => handleInfoChange('firstName', text)}
          />
          <Input
            containerStyle={{ flex: 1 }}
            label=""
            labelStyle={{ fontSize: 20 }}
            placeholder="Last Name"
            onChangeText={(text) => handleInfoChange('lastName', text)}
          />
        </MultiLineInputs>
        <Input
          autoCorrect={false}
          label="Email"
          labelStyle={{ fontSize: 20 }}
          placeholder="Email"
          keyboardType={'email-address'}
          onChangeText={(text) => handleInfoChange('email', text)}
        />
        <Input
          label="Phone Number"
          labelStyle={{ fontSize: 20 }}
          placeholder="Phone Number"
          value={appInfo.phoneNumber}
          textContentType="telephoneNumber"
          dataDetactorTypes="phoneNunmber"
          keyboardType="phone-pad"
          maxLength={14}
          onChangeText={(text) => onTextChange(text)}
        />
        <Input
          label="Address"
          labelStyle={{ fontSize: 20 }}
          placeholder="Street"
          onChangeText={(text) => handleAddressChange('street', text)}
        />
        <MultiLineInputs>
          <Input
            placeholder="City"
            containerStyle={{ flex: 2 }}
            onChangeText={(text) => handleAddressChange('city', text)}
          />
          <Input
            placeholder="State"
            containerStyle={{ flex: 1 }}
            onChangeText={(text) => handleAddressChange('state', text)}
          />
        </MultiLineInputs>
        <Input
          placeholder="Zip"
          onChangeText={(text) => handleAddressChange('postalCode', text)}
        />

        <Input
          label="Bio"
          multiline={true}
          numberOfLines={2}
          labelStyle={{ fontSize: 20 }}
          placeholder="Bio"
          onChangeText={(text) => handleInfoChange('bio', text)}
        />
        <Button
          title="APPLY"
          containerStyle={{ paddingTop: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={handleSubmit}
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
