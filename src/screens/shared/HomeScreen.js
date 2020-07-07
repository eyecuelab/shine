/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../rdx/actions';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';

const { height: HEIGHT } = Dimensions.get('window');

const HomeScreen = ({ orders }) => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    if (item.requestCompleted === false) {
      navigation.navigate('OrderFinal', item);
    } else {
      navigation.navigate('OrderStatus', item);
    }
  };

  if (orders.length !== 0) {
    return (
      <>
        <ListContainer>
          <ImageArea onPress={() => navigation.navigate('NewOrder')}>
            <Image source={require('../../../assets/images/logo.png')} />
          </ImageArea>
        </ListContainer>

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
              return (
                <TouchableOpacity
                  key={item.uuid}
                  onPress={() => handleClick(item)}
                >
                  <ItemsContainer>
                    <OrderItem order={item} />
                  </ItemsContainer>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </>
    );
  } else {
    return (
      <>
        <HomeContainer>
          <ImageArea onPress={() => navigation.navigate('NewOrder')}>
            <Image source={require('../../../assets/images/logo.png')} />
          </ImageArea>
        </HomeContainer>
      </>
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

HomeScreen.propTypes = {
  orders: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(HomeScreen);
