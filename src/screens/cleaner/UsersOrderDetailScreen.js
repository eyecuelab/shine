import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const UsersOrderDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const item = route.params;
  // console.log('DETAIL', item);

  return (
    <>
      <Container>
        <Text>{item.attributes.uuid}</Text>
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

UsersOrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  orders: PropTypes.array,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { orders: state.orders, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(UsersOrderDetailScreen);
