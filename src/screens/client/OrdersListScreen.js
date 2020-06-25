import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';

const OrdersList = ({ orders }) => {
  // const route = useRoute();
  // const { image } = route.params;

  const navigation = useNavigation();
  const goToDetail = (item) => {
    console.log('ITEM', item);
    navigation.navigate('OrderDetail', item);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 10,
      }}
    >
      {orders.map((item) => {
        // console.log(item);
        return (
          <TouchableOpacity key={item.id} onPress={() => goToDetail(item)}>
            <Container>
              <OrderItem order={item} />
            </Container>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const Container = styled.View`
  margin: 10px;
`;

OrdersList.propTypes = {
  orders: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrdersList);
