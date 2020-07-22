/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../rdx/actions';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

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
        <Header>
          <HeaderImage
            source={require('../../../assets/images/logo-clear.png')}
          />
          <HeaderTextView>
            <HeaderText>Orders</HeaderText>
          </HeaderTextView>
        </Header>
        <ListContainer>
          <AddOrderContainer onPress={() => navigation.navigate('NewOrder')}>
            <AddOrderLogo
              source={require('../../../assets/images/shoe_icon.png')}
            />
            <AddOrderBoxText>NEW ORDER</AddOrderBoxText>
          </AddOrderContainer>
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
          <AddOrderText> START Order</AddOrderText>
        </TextArea>
        <Text
          style={{
            fontFamily: 'Raleway-Regular',
            fontSize: 12,
            color: 'white',
            width: 175,
            textAlign: 'center',
          }}
        >
          You will be instructed to log-in or sign-up when order is submitted
        </Text>
      </HomeContainer>
    );
  }
};

const Header = styled.View`
  background-color: #cbb387;
  align-items: center;
  justify-content: center;
`;
const HeaderTextView = styled.View`
  width: 150px;
  border-bottom-width: 1px;
  border-color: white;
  align-items: center;
  margin-bottom: 15px;
`;
const HeaderText = styled.Text`
  font-family: 'Marison-Sans-Round';
  color: white;
  font-size: 25px;
`;

const AddOrderText = styled.Text`
  font-family: Marison-Sans-Round;
  color: white;
  font-size: 30px;
  padding-top: 35px;
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

const HeaderImage = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const ItemsContainer = styled.TouchableOpacity`
  margin: 20px 0px 0px 20px;
`;

const AddOrderLogo = styled.Image``;

const AddOrderBoxText = styled.Text`
  margin-top: 15px;
  font-family: 'Marison-Sans-Round'
  font-size: 14px;
  color: white;
`;

const AddOrderContainer = styled.TouchableOpacity`
  width: ${WIDTH / 2.4}px;
  height: ${HEIGHT / 5}px;
  background-color: #bdbdbd;
  border-radius: 15px;
  margin: 20px 0px 0px 20px;
  justify-content: center;
  align-items: center;
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
