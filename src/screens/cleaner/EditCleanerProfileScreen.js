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

const EditCleanerProfileScreen = ({
  users,
  cleaner,
  navigation,
  editCleanerWatcher,
}) => {
  const [cleanerProfile, setCleanerProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    street_address: '',
    city: '',
    state: '',
    postal_code: '',
    phone: '',
    bio: '',
    business_name: '',
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

  const businessName = users.cleaner.attributes.business_name;
  const firstName = users.cleaner.attributes.first_name;
  const lastName = users.cleaner.attributes.last_name;
  const email = users.cleaner.attributes.email;
  const phone = users.cleaner.attributes.phone;
  const street = users.cleaner.attributes.street_address;
  const city = users.cleaner.attributes.city;
  const state = users.cleaner.attributes.state;
  const zip = users.cleaner.attributes.postal_code;

  const handleChange = (key, value) => {
    setCleanerProfile((current) => ({
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
      handleChange('phone', number);
      return;
    }
    handleChange('phone', text);
  };

  const errorMessage = cleaner.errorMessage;

  const onSubmit = () => {
    editCleanerWatcher(cleanerProfile);
    navigation.navigate('Cleaner Profile');
  };

  return (
    <ScrollViewContainer>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        <Input
          value={cleanerProfile.business_name}
          label="Business"
          labelStyle={{ fontSize: 20 }}
          placeholder={businessName ? businessName : 'Title'}
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
          onChangeText={(text) => handleChange('business_name', text)}
          onSubmitEditing={() => inputEl2.current.focus()}
        />
        <MultiLineInputs>
          <Input
            ref={inputEl2}
            value={cleanerProfile.first_name}
            containerStyle={{ flex: 1 }}
            label="Contact Name"
            labelStyle={{ fontSize: 20 }}
            placeholder={firstName ? firstName : 'First'}
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
            onChangeText={(text) => handleChange('first_name', text)}
            onSubmitEditing={() => inputEl3.current.focus()}
          />
          <Input
            ref={inputEl3}
            value={cleanerProfile.last_name}
            containerStyle={{ flex: 1 }}
            label=""
            labelStyle={{ fontSize: 20 }}
            placeholder={lastName ? lastName : 'Last'}
            returnKeyType="next"
            onChangeText={(text) => handleChange('last_name', text)}
            onSubmitEditing={() => inputEl4.current.focus()}
          />
        </MultiLineInputs>
        <Input
          ref={inputEl4}
          value={cleanerProfile.email}
          autoCorrect={false}
          label="Email"
          labelStyle={{ fontSize: 20 }}
          placeholder={email ? email : 'example@email.com'}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon={
            <MaterialIcons
              name="email"
              size={18}
              color="black"
              style={{ marginRight: 5 }}
            />
          }
          returnKeyType="next"
          onChangeText={(text) => handleChange('email', text)}
          onSubmitEditing={() => inputEl5.current.focus()}
        />
        <Input
          ref={inputEl5}
          value={cleanerProfile.phone}
          label="Phone Number"
          labelStyle={{ fontSize: 20 }}
          placeholder={phone ? phone : '(xxx)-xxx-xxxx'}
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
          value={cleanerProfile.street_address}
          label="Address"
          labelStyle={{ fontSize: 20 }}
          placeholder={street ? street : 'Street'}
          leftIcon={
            <MaterialIcons
              name="home"
              size={18}
              color="black"
              style={{ marginRight: 5 }}
            />
          }
          returnKeyType="next"
          autoCapitalize="words"
          onChangeText={(text) => handleChange('street_address', text)}
          onSubmitEditing={() => inputEl7.current.focus()}
        />
        <MultiLineInputs>
          <Input
            ref={inputEl7}
            value={cleanerProfile.city}
            placeholder={city ? city : 'City'}
            containerStyle={{ flex: 2 }}
            onChangeText={(text) => handleChange('city', text)}
            returnKeyType="next"
            onSubmitEditing={() => inputEl8.current.focus()}
          />
          <Input
            ref={inputEl8}
            value={cleanerProfile.state}
            placeholder={state ? state : 'State'}
            containerStyle={{ flex: 1 }}
            autoCapitalize="characters"
            maxLength={2}
            onChangeText={(text) => handleChange('state', text)}
            returnKeyType="next"
            onSubmitEditing={() => inputEl9.current.focus()}
          />
        </MultiLineInputs>
        <Input
          ref={inputEl9}
          value={cleanerProfile.postal_code}
          placeholder={zip ? zip : 'Zip'}
          keyboardType="number-pad"
          maxLength={5}
          onChangeText={(text) => handleChange('postal_code', text)}
          returnKeyType="done"
          onSubmitEditing={() => inputEl10.current.focus()}
        />
        <Input
          ref={inputEl10}
          value={cleanerProfile.bio}
          label="Bio"
          multiline={true}
          scrollEnabled={false}
          labelStyle={{ fontSize: 20 }}
          placeholder="Skills and Experience"
          returnKeyType={'done'}
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => handleChange('bio', text)}
        />
        {errorMessage !== null ? (
          <ErrorTextContainer>
            <Text>{errorMessage}</Text>
          </ErrorTextContainer>
        ) : null}

        <Button
          title="SUBMIT"
          containerStyle={{ paddingTop: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={onSubmit}
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

const ErrorTextContainer = styled.View`
  margin-horizontal: 20px;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: #8e1818;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

EditCleanerProfileScreen.propTypes = {
  navigation: PropTypes.object,
  editCleanerWatcher: PropTypes.func,
  users: PropTypes.object,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(EditCleanerProfileScreen);
