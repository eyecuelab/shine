import React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  useRoute,
  useNavigation,
  useLinkProps,
} from '@react-navigation/native';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';

const OrdersList = ({ orders }) => {
  // const route = useRoute();
  // const { image } = route.params;

  // const navigation = useNavigation();
  // const goToDetail = () => {
  //   navigation.navigate('OrderDetail', { image });
  // };

  const renderItem = (order) => {
    return <OrderItem order={order.item} />;
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        margin: 10,
      }}
    >
      {orders.map((item) => {
        return (
          <Container key={item.id}>
            <OrderItem order={item} />
          </Container>
        );
      })}
    </ScrollView>
  );
};

const Container = styled.View`
  margin: 10px;
`;

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrdersList);
