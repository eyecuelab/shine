/* eslint-disable no-undef */
import React, { useState, useRef } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const CleanerApplicationScreen = ({ users, applyCleanerWatcher }) => {
  // TODO: bring in the USERID from the AUTHREDUCER, meaning the user will have to be logged in to see this page.
  const userId = users.auth.userId;
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

  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);
  const inputEl5 = useRef(null);
  const inputEl6 = useRef(null);
  const inputEl7 = useRef(null);
  const inputEl8 = useRef(null);
  const inputEl9 = useRef(null);
  const inputEl10 = useRef(null);

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
    applyCleanerWatcher({
      userId: userId,
      profile: appInfo,
      address: cleanerAddress,
    });
  };

  return (
    <ScrollViewContainer>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        <ImageArea>
          <Image source={require('../../../assets/images/logo-outline.png')} />
        </ImageArea>
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
          returnKeyType="next"
          onChangeText={(text) => handleInfoChange('businessName', text)}
          onSubmitEditing={() => inputEl2.current.focus()}
        />
        <MultiLineInputs>
          <Input
            ref={inputEl2}
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
            returnKeyType="next"
            onChangeText={(text) => handleInfoChange('firstName', text)}
            onSubmitEditing={() => inputEl3.current.focus()}
          />
          <Input
            ref={inputEl3}
            value={appInfo.lastName}
            containerStyle={{ flex: 1 }}
            label=""
            labelStyle={{ fontSize: 20 }}
            placeholder="Last"
            returnKeyType="next"
            onChangeText={(text) => handleInfoChange('lastName', text)}
            onSubmitEditing={() => inputEl4.current.focus()}
          />
        </MultiLineInputs>
        <Input
          ref={inputEl4}
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
          returnKeyType="next"
          onChangeText={(text) => handleInfoChange('email', text)}
          onSubmitEditing={() => inputEl5.current.focus()}
        />
        <Input
          ref={inputEl5}
          value={appInfo.phoneNumber}
          label="Phone Number"
          labelStyle={{ fontSize: 20 }}
          placeholder="(xxx)-xxx-xxxx"
          textContentType="telephoneNumber"
          dataDetactorTypes="phoneNunmber"
          keyboardType="phone-pad"
          returnKeyType="done"
          maxLength={10}
          leftIcon={
            <MaterialIcons
              name="phone"
              size={18}
              color="black"
              style={{ marginRight: 5 }}
            />
          }
          onChangeText={(text) => onTextChange(text)}
          onSubmitEditing={() => inputEl6.current.focus()}
        />
        <Input
          ref={inputEl6}
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
          returnKeyType="next"
          onChangeText={(text) => handleAddressChange('street', text)}
          onSubmitEditing={() => inputEl7.current.focus()}
        />
        <MultiLineInputs>
          <Input
            ref={inputEl7}
            value={cleanerAddress.city}
            placeholder="City"
            containerStyle={{ flex: 2 }}
            onChangeText={(text) => handleAddressChange('city', text)}
            returnKeyType="next"
            onSubmitEditing={() => inputEl8.current.focus()}
          />
          <Input
            ref={inputEl8}
            value={cleanerAddress.state}
            placeholder="State"
            containerStyle={{ flex: 1 }}
            autoCapitalize="characters"
            maxLength={2}
            onChangeText={(text) => handleAddressChange('state', text)}
            returnKeyType="next"
            onSubmitEditing={() => inputEl9.current.focus()}
          />
        </MultiLineInputs>
        <Input
          ref={inputEl9}
          value={cleanerAddress.postalCode}
          placeholder="Zip"
          keyboardType="number-pad"
          maxLength={5}
          onChangeText={(text) => handleAddressChange('postalCode', text)}
          returnKeyType="done"
          onSubmitEditing={() => inputEl10.current.focus()}
        />
        <Input
          ref={inputEl10}
          value={appInfo.bio}
          label="Bio"
          multiline={true}
          scrollEnabled={false}
          labelStyle={{ fontSize: 20 }}
          placeholder="Skills and Experience"
          returnKeyType={'done'}
          onSubmitEditing={Keyboard.dismiss}
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
      </KeyboardAwareScrollView>
    </ScrollViewContainer>
  );
};

const ImageArea = styled.View`
  width: 100px;
  height: 100px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

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

CleanerApplicationScreen.propTypes = {
  applyCleanerWatcher: PropTypes.func,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, actions)(CleanerApplicationScreen);
