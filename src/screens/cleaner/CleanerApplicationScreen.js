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

  // const [cleanerProfile, setAppInfo] = useState({
  //   businessName: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phoneNumber: '',
  //   bio: '',
  // });
  // const [cleanerAddress, setCleanerAddress] = useState({
  //   street: '',
  //   city: '',
  //   state: '',
  //   postalCode: '',
  // });

  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);
  const inputEl5 = useRef(null);
  const inputEl6 = useRef(null);
  const inputEl7 = useRef(null);
  const inputEl8 = useRef(null);
  const inputEl9 = useRef(null);
  const inputEl10 = useRef(null);

  const handleChange = (key, value) => {
    setCleanerProfile((current) => ({
      ...current,
      [key]: value,
    }));
  };

  // const handleChange = (key, value) => {
  //   setCleanerAddress((current) => ({
  //     ...current,
  //     [key]: value,
  //   }));
  // };
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

  const handleSubmit = () => {
    applyCleanerWatcher({ profile: cleanerProfile });
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
          value={cleanerProfile.business_name}
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
            onChangeText={(text) => handleChange('first_name', text)}
            onSubmitEditing={() => inputEl3.current.focus()}
          />
          <Input
            ref={inputEl3}
            value={cleanerProfile.last_name}
            containerStyle={{ flex: 1 }}
            label=""
            labelStyle={{ fontSize: 20 }}
            placeholder="Last"
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
          onChangeText={(text) => handleChange('email', text)}
          onSubmitEditing={() => inputEl5.current.focus()}
        />
        <Input
          ref={inputEl5}
          value={cleanerProfile.phone}
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
          value={cleanerProfile.street_address}
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
          onChangeText={(text) => handleChange('street_address', text)}
          onSubmitEditing={() => inputEl7.current.focus()}
        />
        <MultiLineInputs>
          <Input
            ref={inputEl7}
            value={cleanerProfile.city}
            placeholder="City"
            containerStyle={{ flex: 2 }}
            onChangeText={(text) => handleChange('city', text)}
            returnKeyType="next"
            onSubmitEditing={() => inputEl8.current.focus()}
          />
          <Input
            ref={inputEl8}
            value={cleanerProfile.state}
            placeholder="State"
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
          placeholder="Zip"
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
