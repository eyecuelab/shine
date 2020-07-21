import * as React from 'react';
import { connect } from 'react-redux';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import OrderItemCompleted from '../../components/order/OrderItemCompleted';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const AcceptedQuotesScreen = ({ cleaner, navigation }) => {
  const cleanerID = cleaner.data ? cleaner.data.id : null;
  const quotedOrders = cleaner.quotedOrders ? cleaner.quotedOrders : null;
  console.log('QUOTED', quotedOrders);

  return (
    <ScrollViewContainer>
      <Container>
        {quotedOrders &&
          quotedOrders.map((item) => (
            <ItemsContainer
              key={item.attributes.uuid}
              onPress={() => navigation.navigate('Quoted Order Detail', item)}
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
  margin: 20px 0px 0px 20px;
`;

AcceptedQuotesScreen.propTypes = {
  navigation: PropTypes.object,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(AcceptedQuotesScreen);
