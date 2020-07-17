import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const OrdersInAreaScreen = ({ orders, cleaner, navigation }) => {
  return (
    <ScrollViewContainer>
      <Container>
        {cleaner.quotableOrders &&
          cleaner.quotableOrders.map((item) => (
            <ItemsContainer
              key={item.attributes.uuid}
              onPress={() => navigation.navigate('Order Detail', item)}
            >
              <OrderItem order={item} />
            </ItemsContainer>
          ))}
      </Container>
    </ScrollViewContainer>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ItemsContainer = styled.TouchableOpacity`
  margin: 10px;
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
  return { orders: state.orders.orders, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(OrdersInAreaScreen);
