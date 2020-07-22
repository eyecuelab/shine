/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Modal,
} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import * as actions from '../../rdx/actions';
import PropTypes from 'prop-types';
import {
  PickImage,
  TakePhoto,
} from '../../components/shared/UploadPhotoFunctions';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const EditProfileScreen = ({
  editProfileWatcher,
  setStatus,
  user,
  errorMessage,
  navigation,
  status,
}) => {
  const [userProfile, setUserProfile] = useState({
    street_address: user.street_address,
    city: user.city,
    state: user.state,
    postal_code: user.postal_code,
    phone: user.phone,
  });

  const [profilePhoto, setProfilePhoto] = useState(
    user.image_url ? user.image_url : '',
  );
  const nav = navigation;

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(false);
  }, [profilePhoto]);

  useEffect(() => {
    if (status === 'User Profile Updated!' && errorMessage === null) {
      console.log('HIT');
      setStatus();
      nav.navigate('Profile');
    }
  }, [status, errorMessage]);

  const handleProfileChange = (key, value) => {
    setUserProfile((current) => ({
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
      handleProfileChange('phone', number);
      return;
    }
    handleProfileChange('phone', text);
  };

  const inputEl2 = React.useRef(null);
  const inputEl3 = React.useRef(null);
  const inputEl4 = React.useRef(null);
  const inputEl5 = React.useRef(null);

  // console.log(user.email);

  const onSubmit = () => {
    // console.log('onSubmit', profilePhotoUpload);
    editProfileWatcher(
      {
        image_url: profilePhoto,
        email: user.email,
        street_address: userProfile.street_address,
        city: userProfile.city,
        state: userProfile.state,
        postal_code: userProfile.postal_code,
        phone: userProfile.phone,
      },
      user.email,
    );
  };
  const ProfilePhotoDisplay = () => {
    if (profilePhoto === '') {
      return (
        <Profile source={require('../../../assets/images/profile-pic.png')} />
      );
    } else {
      return <Profile source={{ uri: profilePhoto }} />;
    }
  };
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <PhotoContainer>
              <ProfilePhotoDisplay />
              <ChangePhotoClick
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <BlueText>Change Profile Photo</BlueText>
              </ChangePhotoClick>
            </PhotoContainer>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}
            >
              <ModalContainer>
                <ModalView>
                  <ModalItem>
                    <Text>Choose a profile image using your:</Text>
                  </ModalItem>

                  <ModalItem
                    onPress={() => PickImage({ setImage: setProfilePhoto })}
                  >
                    <BlueText>Photo Library</BlueText>
                  </ModalItem>
                  <ModalItem
                    onPress={() => TakePhoto({ setImage: setProfilePhoto })}
                  >
                    <BlueText>Camera</BlueText>
                  </ModalItem>
                  <ModalItem
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <BlueText>Cancel</BlueText>
                  </ModalItem>
                </ModalView>
              </ModalContainer>
            </Modal>

            <MultiLineInputs>
              <Text>Street</Text>
              <TextInput
                placeholder={'Street Address'}
                returnKeyType="next"
                autoCapitalize="words"
                autoCorrect={false}
                style={styles.input}
                value={userProfile.street_address}
                onChangeText={(text) =>
                  handleProfileChange('street_address', text)
                }
                onSubmitEditing={() => inputEl2.current.focus()}
                // blurOnSubmit={false}
              />
            </MultiLineInputs>
            <MultiLineInputs>
              <Text>City</Text>
              <TextInput
                ref={inputEl2}
                placeholder={'City'}
                returnKeyType="next"
                autoCapitalize="words"
                autoCorrect={false}
                style={styles.input}
                value={userProfile.city}
                onChangeText={(text) => handleProfileChange('city', text)}
                onSubmitEditing={() => inputEl3.current.focus()}
              />
            </MultiLineInputs>
            <MultiLineInputs>
              <Text>State</Text>
              <TextInput
                ref={inputEl3}
                placeholder={'State'}
                returnKeyType="next"
                autoCapitalize="characters"
                autoCorrect={false}
                maxLength={2}
                style={styles.input}
                value={userProfile.state}
                onChangeText={(text) => handleProfileChange('state', text)}
                onSubmitEditing={() => inputEl4.current.focus()}
              />
            </MultiLineInputs>
            <MultiLineInputs>
              <Text>Zip</Text>
              <TextInput
                ref={inputEl4}
                placeholder={'Zip'}
                returnKeyType="done"
                keyboardType="number-pad"
                maxLength={5}
                style={styles.input}
                value={userProfile.postal_code}
                onChangeText={(text) =>
                  handleProfileChange('postal_code', text)
                }
                onSubmitEditing={() => inputEl5.current.focus()}
              />
            </MultiLineInputs>
            <MultiLineInputs>
              <Text>Phone</Text>
              <TextInput
                ref={inputEl5}
                placeholder={'(xxx)-xxx-xxxx'}
                returnKeyType="done"
                textContentType="telephoneNumber"
                dataDetactorTypes="phoneNunmber"
                keyboardType="phone-pad"
                maxLength={10}
                style={styles.input}
                value={userProfile.phone}
                onChangeText={(text) => onTextChange(text)}
              />
            </MultiLineInputs>

            <ErrorTextContainer>
              <ErrorText>
                {errorMessage !== null ? errorMessage : null}
              </ErrorText>
            </ErrorTextContainer>

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
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    width: WIDTH * 0.6,
    marginVertical: 5,
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#161F3D',
  },
});

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const PhotoContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 6}px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  position: relative;
`;

const Profile = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 3px;
  border-color: #cbb387;
  margin-bottom: 20px;
`;

const ChangePhotoClick = styled.TouchableHighlight``;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-top: 22px;
`;

const ModalView = styled.View`
  width: 100%;
  margin: 20px;
  background-color: white;
  padding: 30px;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.25;
`;

const ModalItem = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
  padding-horizontal: 25px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const BlueText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
  color: #3483eb;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-right: 10px;
`;

const MultiLineInputs = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const ErrorTextContainer = styled.View`
  margin-horizontal: 20px;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.Text`
  color: #8e1818;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

EditProfileScreen.propTypes = {
  editProfileWatcher: PropTypes.func,
  user: PropTypes.object,
  errorMessage: PropTypes.any,
  navigation: PropTypes.object,
  setStatus: PropTypes.func,
  status: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    status: state.users.status,
    user: state.users.data.included[0].attributes,
    errorMessage: state.users.errorMessage,
  };
};

export default connect(mapStateToProps, actions)(EditProfileScreen);
