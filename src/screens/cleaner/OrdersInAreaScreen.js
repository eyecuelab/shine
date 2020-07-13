import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const OrdersInAreaScreen = ({ cleaner, navigation }) => {
  return (
    <>
      <Container>
        <Text>OrdersInAreaScreen</Text>
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

OrdersInAreaScreen.propTypes = {
  navigation: PropTypes.object,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(OrdersInAreaScreen);
