import React from 'react';
import { ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const OrdersList = ({ orders }) => {
  // const route = useRoute();
  // const { image } = route.params;
  // console.log('ORDERS: ', orders);
  const navigation = useNavigation();
  const goToDetail = (item) => {
    navigation.navigate('OrderDetail', item);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          margin: 10,
        }}
      >
        {orders &&
          orders.map((item) => {
            // console.log(item);
            return (
              <TouchableOpacity key={item.id} onPress={() => goToDetail(item)}>
                <ItemsContainer>
                  <OrderItem order={item} />
                </ItemsContainer>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </>
  );
};

const ItemsContainer = styled.View`
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

OrdersList.propTypes = {
  orders: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrdersList);
