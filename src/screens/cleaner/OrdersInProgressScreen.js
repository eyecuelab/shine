import * as React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const { height } = Dimensions.get('window');

const OrdersInProgressScreen = ({ cleaner, navigation }) => {
  const cleanerID = cleaner.data.id;
  const quotedOrders = cleaner.quotedOrders
    ? cleaner.quotedOrders.filter(
        (item) => item.attributes.cleaner_id == cleanerID,
      )
    : null;

  return (
    <ScrollViewContainer>
      <Container>
        {quotedOrders && quotedOrders.length !== 0 ? (
          quotedOrders.map((item) => (
            <ItemsContainer
              key={item.attributes.uuid}
              onPress={() =>
                navigation.navigate('In Pogress Order Detail', item)
              }
            >
              <OrderItem order={item} />
            </ItemsContainer>
          ))
        ) : (
          <TextContainer>
            <Text>There are no accepted quotes yet.</Text>
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
  height: ${height / 1.27}px;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
const Text = styled.Text`
  font-family: Raleway-Medium
  font-size: 18px;
  text-align: center;
`;

OrdersInProgressScreen.propTypes = {
  navigation: PropTypes.object,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(OrdersInProgressScreen);
