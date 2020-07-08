import * as React from 'react';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import * as actions from '../../rdx/actions';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const EditProfileScreen = ({ editProfileWatcher, users }) => {
  const [userProfile, setUserProfile] = React.useState({
    street_address: '',
    city: '',
    state: '',
    postal_code: '',
    phone: '',
    image_file: '',
  });

  const handleProfileChange = (key, value) => {
    setUserProfile((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const navigation = useNavigation();
  const onSubmit = () => {
    console.log(userProfile);
    // editProfileWatcher(userAddress);
    navigation.navigate('Profile');
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <TextInput
              placeholder="Street"
              returnKeyType="next"
              autoCapitalize="words"
              autoCorrect={false}
              style={styles.input}
              value={userProfile.street_address}
              onChangeText={(text) =>
                handleProfileChange('street_address', text)
              }
            />
            <TextInput
              placeholder="City"
              returnKeyType="next"
              autoCapitalize="words"
              autoCorrect={false}
              style={styles.input}
              value={userProfile.city}
              onChangeText={(text) => handleProfileChange('city', text)}
            />
            <TextInput
              placeholder="State"
              returnKeyType="next"
              autoCapitalize="characters"
              autoCorrect={false}
              style={styles.input}
              value={userProfile.state}
              onChangeText={(text) => handleProfileChange('state', text)}
            />
            <TextInput
              placeholder="Zip"
              returnKeyType="next"
              keyboardType="number-pad"
              style={styles.input}
              value={userProfile.postal_code}
              onChangeText={(text) => handleProfileChange('postal_code', text)}
              onSubmitEditing={onSubmit}
            />
            <TextInput
              placeholder="Phone"
              returnKeyType="done"
              keyboardType="number-pad"
              style={styles.input}
              value={userProfile.phone}
              onChangeText={(text) => handleProfileChange('phone', text)}
              onSubmitEditing={onSubmit}
            />

            <Button
              title="Log in"
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
    width: width * 0.85,
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

const Text = styled.Text`
  color: #8e1818;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const MultiLineInputs = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
`;

EditProfileScreen.propTypes = {
  editProfileWatcher: PropTypes.func,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, actions)(EditProfileScreen);
