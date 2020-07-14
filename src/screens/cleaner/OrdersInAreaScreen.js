import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ScrollViewContainer from '../../components/shared/ScrollViewContainer';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const OrdersInAreaScreen = ({ orders, cleaner, navigation }) => {
  return (
    <ScrollViewContainer>
      <Container>
        {orders.map((item) =>
          item.attributes.quote_accepted_at === null ? (
            <>
              <ItemsContainer>
                <Text>{item.attributes.uuid}</Text>
              </ItemsContainer>
            </>
          ) : null,
        )}
      </Container>
    </ScrollViewContainer>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const ItemsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
  padding-horizontal: 25px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
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
