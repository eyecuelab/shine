import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const CompletedOrdersScreen = () => {
  return (
    <>
      <Container>
        <Text>CompletedOrdersScreen</Text>
      </Container>
    </>
  );
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

CompletedOrdersScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CompletedOrdersScreen;
