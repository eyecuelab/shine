import React, { useState } from 'react';
import { Dimensions, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const PasswordInput = ({ value, setValue, placeholder }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureTextEntry = () => {
    setSecureTextEntry((previousState) => !previousState);
  };
  return (
    <InputContainer>
      <TextInput
        placeholder={placeholder}
        returnKeyType="done"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={setValue}
        // onSubmitEditing={onSubmit}
      />

      <SecureButton onPress={toggleSecureTextEntry}>
        {secureTextEntry ? (
          <Feather name="eye-off" color="grey" size={20} />
        ) : (
          <Feather name="eye" color="grey" size={20} />
        )}
      </SecureButton>
    </InputContainer>
  );
};

const styles = StyleSheet.create({
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

const InputContainer = styled.View`
  flex-direction: row;
`;

const SecureButton = styled.TouchableOpacity`
  position: absolute;
  margin-left: 300px;
  margin-top: 15px;
`;

PasswordInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
};

export default PasswordInput;
