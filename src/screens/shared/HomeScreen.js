/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../rdx/actions';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';

const { height: HEIGHT } = Dimensions.get('window');

const HomeScreen = ({ orders, users }) => {
  const navigation = useNavigation();
  const handleClick = (item) => {
    if (item.attributes.quote_accepted_at === null) {
      navigation.navigate('OrderFinal', item);
    } else {
      navigation.navigate('OrderStatus', item);
    }
  };
  const userId = users.data ? users.data.included[0].id : null;

  return orders.map((item) =>
    item.attributes.user_id == userId ? (
      <>
        {/* <ListContainer>
          <ImageArea onPress={() => navigation.navigate('NewOrder')}>
            <Image source={require('../../../assets/images/logo.png')} />
          </ImageArea>
        </ListContainer> */}
        {console.log('ITEMS:', item)}
        {/* <Text>{item.attributes.uuid}</Text> */}
        <TouchableOpacity
          key={item.attributes.uuid}
          onPress={() => handleClick(item)}
        >
          <ItemsContainer>
            <OrderItem order={item} />
          </ItemsContainer>
        </TouchableOpacity>
      </>
    ) : (
      <>
        <HomeContainer>
          <ImageArea onPress={() => navigation.navigate('NewOrder')}>
            <Image source={require('../../../assets/images/logo.png')} />
          </ImageArea>
        </HomeContainer>
      </>
    ),
  );
};

const HomeContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #cbb387;
`;

const ListContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3.2}px;
  align-items: center;
  justify-content: center;
  background-color: #cbb387;
`;

const ImageArea = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const ItemsContainer = styled.View`
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

HomeScreen.propTypes = {
  orders: PropTypes.array,
  users: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { orders: state.orders, users: state.users };
};

export default connect(mapStateToProps, actions)(HomeScreen);
