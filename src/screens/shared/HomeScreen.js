/* eslint-disable no-undef */
import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../rdx/actions';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';

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

  return (
    // <ScrollViewContainer>
    <ListContainer>
      {orders.length == 0 ? (
        <>
          <HomeContainer>
            <ImageArea onPress={() => navigation.navigate('NewOrder')}>
              <Image source={require('../../../assets/images/logo.png')} />
            </ImageArea>
          </HomeContainer>
        </>
      ) : (
        orders.map((item) =>
          item.attributes.user_id == userId ? (
            <>
              <ItemsContainer
                key={item.attributes.uuid}
                onPress={() => handleClick(item)}
              >
                <OrderItem order={item} />
              </ItemsContainer>
            </>
          ) : null,
        )
      )}
      {/* {orders.map((item) =>
        item.attributes.user_id == userId ? (
          <>
            <ItemsContainer
              key={item.attributes.uuid}
              onPress={() => handleClick(item)}
            >
              <OrderItem order={item} />
            </ItemsContainer>
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
      )} */}
    </ListContainer>
    // </ScrollViewContainer>
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
  margin: 10px;
`;

const Header = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
  padding-horizontal: 25px;
  align-items: center;
  justify-content: center;
  background-color: white;
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
