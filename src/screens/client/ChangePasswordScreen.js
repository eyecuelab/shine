import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import PasswordInput from '../../components/shared/PasswordInput';
import { connect } from 'react-redux';
import * as actions from '../../rdx/actions';
import PropTypes from 'prop-types';
import UniversalButton from '../../components/shared/UniversalButton';

const ChangePasswordScreen = ({
  navigation,
  updatePassword,
  errorMessage,
  user,
  status,
  setStatus,
}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchError, setMatchError] = useState('');
  const nav = navigation;

  const onSubmit = () => {
    if (newPassword !== confirmPassword) {
      setMatchError('Passwords Do Not Match');
    }
    updatePassword({
      password: newPassword,
      email: user.email,
      street_address: user.street_address,
      city: user.city,
      state: user.state,
      postal_code: user.postal_code,
      phone: user.phone,
    });
    // navigation.navigate('Profile');
  };

  useEffect(() => {
    return () => {
      setStatus();
    };
  }, []);

  useEffect(() => {
    if (status === 'User Profile Updated!') {
      // actions.setStatus();
      nav.navigation('Profile');
    }
  }, [status]);

  return (
    <>
      <KeyboardAvoidingView
        // eslint-disable-next-line no-undef
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <PasswordInput
              value={newPassword}
              setValue={setNewPassword}
              placeholder="New Password"
            />
            <PasswordInput
              value={confirmPassword}
              setValue={setConfirmPassword}
              placeholder="Confirm Password"
            />
            {matchError.length !== 0 ? (
              <ErrorTextContainer>
                <ErrorText>{matchError}</ErrorText>
              </ErrorTextContainer>
            ) : null}

            <UniversalButton
              title={'CHANGE PASSWORD'}
              width={280}
              onPress={onSubmit}
            />

            <ErrorTextContainer>
              <ErrorText>
                {errorMessage !== null ? errorMessage : null}
              </ErrorText>
            </ErrorTextContainer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
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

const ErrorText = styled.Text`
  color: #8e1818;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

ChangePasswordScreen.propTypes = {
  navigation: PropTypes.object,
  updatePassword: PropTypes.func,
  user: PropTypes.object,
  errorMessage: PropTypes.any,
  status: PropTypes.string,
  setStatus: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.users.data.included[0].attributes,
    errorMessage: state.users.errorMessage,
    status: state.users.status,
  };
};

export default connect(mapStateToProps, actions)(ChangePasswordScreen);
