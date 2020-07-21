import * as React from 'react';
import { connect } from 'react-redux';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import OrderItemCompleted from '../../components/order/OrderItemCompleted';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const OrdersInAreaScreen = ({ cleaner, navigation }) => {
  const cleanerID = cleaner.data ? cleaner.data.id : null;
  const filtedQuotableOrders = cleaner.quotableOrders
    ? cleaner.quotableOrders.filter(
        (item) => item.attributes.cleaner_id == null,
      )
    : null;

  return (
    <ScrollViewContainer>
      <Container>
        {filtedQuotableOrders
          ? filtedQuotableOrders.map((item) => (
              <ItemsContainer
                key={item.attributes.uuid}
                onPress={() =>
                  navigation.navigate('Quotable Order Detail', item)
                }
              >
                {cleaner.quotedStatus[item.id] !== undefined &&
                cleaner.quotedStatus[item.id][cleanerID] == 'Requested' ? (
                  <OrderItemCompleted order={item} />
                ) : (
                  <OrderItem order={item} />
                )}
              </ItemsContainer>
            ))
          : null}
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
  margin: 20px 0px 0px 20px;
`;

OrdersInAreaScreen.propTypes = {
  navigation: PropTypes.object,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(OrdersInAreaScreen);
