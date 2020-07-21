/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../rdx/actions';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';

const HomeScreen = ({ orders, users, getOrderByIdWatcher }) => {
  const navigation = useNavigation();
  const handleClick = (item) => {
    getOrderByIdWatcher(item.id);
    if (item.attributes.cleaner_id === null) {
      navigation.navigate('OrderFinal', item);
    } else {
      navigation.navigate('OrderStatus', item);
    }
  };

  if (orders.length !== 0) {
    return (
      <ScrollViewContainer>
        <ListContainer>
          {orders.map((item) => (
            <ItemsContainer key={item.id} onPress={() => handleClick(item)}>
              <OrderItem order={item} />
            </ItemsContainer>
          ))}
        </ListContainer>
      </ScrollViewContainer>
    );
  } else {
    return (
      <HomeContainer>
        <ImageArea>
          <Image source={require('../../../assets/images/logo-clear.png')} />
        </ImageArea>
        <TextArea onPress={() => navigation.navigate('NewOrder')}>
          <AddOrderText> Add Order</AddOrderText>
        </TextArea>
      </HomeContainer>
    );
  }
};

const AddOrderText = styled.Text`
  font-family: Marison-Sans-Round;
  color: white;
  font-size: 30px;
  padding: 30px;
`;

const TextArea = styled.TouchableOpacity``;

const HomeContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #cbb387;
`;

const ListContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImageArea = styled.View`
  width: 275px;
  height: 275px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const ItemsContainer = styled.TouchableOpacity`
  margin: 20px 0px 0px 20px;
`;

HomeScreen.propTypes = {
  orders: PropTypes.array,
  users: PropTypes.object,
  getOrderByIdWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { orders: state.orders.orders, users: state.users };
};

export default connect(mapStateToProps, actions)(HomeScreen);
