import React from 'react';
import Header from "../../components/shared/Header";
import styled from "styled-components/native";
import PropTypes from 'prop-types';

const CleanerProfileScreen = ({ navigation }) => {
  return (
    <>
      <Header title="Profile" navigation={navigation} />
      <Container>
        <Text>CleanerProfileScreen</Text>
      </Container>
    </>
  )
};  

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

CleanerProfileScreen.propTypes = {
  navigation: PropTypes.object
}

export default CleanerProfileScreen;