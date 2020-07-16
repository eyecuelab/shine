import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const OrdersInAreaScreen = ({ orders, cleaner, navigation }) => {
  console.log(cleaner.quotableOrders);
  return (
    <ScrollViewContainer>
      <Container>
        {cleaner.quotableOrders.map((item) => (
          <ItemsContainer
            key={item.attributes.uuid}
            onPress={() => navigation.navigate('Order Detail', item)}
          >
            {/* TODO: REPLACE PHOTO INSTEAD OF TEXT */}
            <Text>{item.attributes.uuid}</Text>
            <OrderItem order={item} />
          </ItemsContainer>
        ))}
      </Container>
    </ScrollViewContainer>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const ItemsContainer = styled.TouchableOpacity`
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.Text`
  color: #737272;
  font-size: 16px;
`;

OrdersInAreaScreen.propTypes = {
  navigation: PropTypes.object,
  orders: PropTypes.array,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { orders: state.orders, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(OrdersInAreaScreen);
