import React from 'react';
import styled from 'styled-components/native';

const ChangePasswordScreen = () => {
  return (
    <Container>
      <Text>Change Password</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Text = styled.Text`
  color: #737272;
  font-size: 16px;
`;

export default ChangePasswordScreen;
