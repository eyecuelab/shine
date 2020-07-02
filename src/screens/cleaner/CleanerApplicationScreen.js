import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';
import { MaterialIcons } from '@expo/vector-icons';
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

  return (
    <ScrollViewContainer>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        <Input
          value={appInfo.businessName}
          label="Business"
          labelStyle={{ fontSize: 20 }}
          placeholder="Title"
          leftIcon={
            <MaterialIcons
              name="business"
              size={18}
              color="black"
              style={{ marginRight: 5 }}
            />
          }
          autoCorrect={false}
          returnKeyType={'next'}
          onChangeText={(text) => handleInfoChange('businessName', text)}
        />
        <MultiLineInputs>
          <Input
            value={appInfo.firstName}
            containerStyle={{ flex: 1 }}
            label="Contact Name"
            labelStyle={{ fontSize: 20 }}
            placeholder="First"
            autoCompleteType={'name'}
            leftIcon={
              <MaterialIcons
                name="person"
                size={18}
                color="black"
                style={{ marginRight: 5 }}
              />
            }
            returnKeyType={'next'}
            onChangeText={(text) => handleInfoChange('firstName', text)}
          />
          <Input
            value={appInfo.lastName}
            containerStyle={{ flex: 1 }}
            label=""
            labelStyle={{ fontSize: 20 }}
            placeholder="Last"
            returnKeyType={'next'}
            onChangeText={(text) => handleInfoChange('lastName', text)}
          />
        </MultiLineInputs>
        <Input
          value={appInfo.email}
          autoCorrect={false}
          label="Email"
          labelStyle={{ fontSize: 20 }}
          placeholder="example@email.com"
          keyboardType={'email-address'}
          leftIcon={
            <MaterialIcons
              name="email"
              size={18}
              color="black"
              style={{ marginRight: 5 }}
            />
          }
          returnKeyType={'next'}
          onChangeText={(text) => handleInfoChange('email', text)}
        />
        <Input
          value={appInfo.phoneNumber}
          label="Phone Number"
          labelStyle={{ fontSize: 20 }}
          placeholder="(xxx)-xxx-xxxx"
          textContentType="telephoneNumber"
          dataDetactorTypes="phoneNunmber"
          keyboardType="phone-pad"
          maxLength={14}
          leftIcon={
            <MaterialIcons
              name="phone"
              size={18}
              color="black"
              style={{ marginRight: 5 }}
            />
          }
          onChangeText={(text) => onTextChange(text)}
        />
        <Input
          value={cleanerAddress.street}
          label="Address"
          labelStyle={{ fontSize: 20 }}
          placeholder="Street"
          leftIcon={
            <MaterialIcons
              name="home"
              size={18}
              color="black"
              style={{ marginRight: 5 }}
            />
          }
          returnKeyType={'next'}
          onChangeText={(text) => handleAddressChange('street', text)}
        />
        <MultiLineInputs>
          <Input
            value={cleanerAddress.city}
            placeholder="City"
            containerStyle={{ flex: 2 }}
            onChangeText={(text) => handleAddressChange('city', text)}
            returnKeyType={'next'}
          />
          <Input
            value={cleanerAddress.state}
            placeholder="State"
            containerStyle={{ flex: 1 }}
            onChangeText={(text) => handleAddressChange('state', text)}
            returnKeyType={'next'}
          />
        </MultiLineInputs>
        <Input
          value={cleanerAddress.postalCode}
          placeholder="Zip"
          onChangeText={(text) => handleAddressChange('postalCode', text)}
          returnKeyType={'next'}
        />

        <Input
          value={appInfo.bio}
          label="Bio"
          multiline={true}
          scrollEnabled={false}
          // containerStyle={{ height: 200, width: 350 }}
          labelStyle={{ fontSize: 20 }}
          placeholder="Skills and Experience"
          leftIcon={
            <MaterialIcons
              name="description"
              size={18}
              color="black"
              style={{ marginRight: 5 }}
            />
          }
          returnKeyType={'done'}
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => handleInfoChange('bio', text)}
        />
        {/* <TextInput
          value={appInfo.bio}
          placeholder="This step is optional. You will also have the opportunity to speak to the cleaner of choice directly after order is placed"
          style={{
            height: 200,
            width: 350,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            padding: 15,
            paddingTop: 10,
            fontSize: 20,
          }}
          multiline={true}
          editable={true}
          // onSubmitEditing={Keyboard.dismiss}
          returnKeyType="next"
        /> */}
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
      </KeyboardAwareScrollView>
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
});

const MultiLineInputs = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
`;

// const Container = styled.View`
//   margin: 10px;
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;

export default CleanerApplicationScreen;
