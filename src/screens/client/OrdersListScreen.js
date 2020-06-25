import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
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
    <Container>
      <FlatList
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
        numColumns={2}
        data={orders}
        renderItem={(order) => renderItem(order)}
        keyExtractor={(order) => order.id}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 10px;
`;

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrdersList);
