/* eslint-disable no-undef */
import React from 'react';
// import { Dimensions } from 'react-native';
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
        <ImageArea onPress={() => navigation.navigate('NewOrder')}>
          <Image source={require('../../../assets/images/logo-clear.png')} />
        </ImageArea>
      </HomeContainer>
    );
  }
};

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

const ImageArea = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const ItemsContainer = styled.TouchableOpacity`
  margin: 20px 0px 0px 20px;
`;

// const Header = styled.TouchableOpacity`
//   flex-direction: row;
//   width: 100%;
//   height: 60px;
//   border-bottom-width: 1px;
//   border-bottom-color: #e3e3e3;
//   padding-horizontal: 25px;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
// `;

// const Text = styled.Text`
//   color: black;
//   font-size: 20px;
//   font-weight: 500;
// `;

HomeScreen.propTypes = {
  orders: PropTypes.array,
  users: PropTypes.object,
  getOrderByIdWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { orders: state.orders.orders, users: state.users };
};

export default connect(mapStateToProps, actions)(HomeScreen);
