import * as React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const { height } = Dimensions.get('window');

const CompletedOrdersScreen = ({ cleaner, navigation }) => {
  const completedOrders = cleaner.completedOrders
    ? cleaner.completedOrders
    : null;

  return (
    <ScrollViewContainer>
      <Container>
        {completedOrders && completedOrders.length !== 0 ? (
          completedOrders.map((item) => (
            <ItemsContainer key={item.attributes.uuid}>
              <OrderItem order={item} />
            </ItemsContainer>
          ))
        ) : (
          <TextContainer>
            <Text>There are no completed orders yet.</Text>
          </TextContainer>
        )}
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

const TextContainer = styled.View`
  width: 100%;
  height: ${height / 1.27}
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
const Text = styled.Text`
  font-family: Raleway-Medium
  font-size: 18px;
  text-align: center;
`;

CompletedOrdersScreen.propTypes = {
  navigation: PropTypes.object,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(CompletedOrdersScreen);
