import React from 'react';
import styled from 'styled-components/native';

const EditProfileScreen = () => {
  return (
    <Container>
      <Text>Edit Profile</Text>
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

export default EditProfileScreen;
