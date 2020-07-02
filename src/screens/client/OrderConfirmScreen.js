import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import PriceWhite from '../../components/shared/PriceWhite';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';
import AddOnSwitch from '../../components/order/AddOnSwitch';

const OrderConfirmScreen = ({ navigation, requestComplete }) => {
  const route = useRoute();
  const item = route.params;
  console.log(item);

  const handleSubmit = () => {
    requestComplete(item.uuid, true);
    navigation.navigate('Home');
  };

  const handleClickCancel = () => {
    navigation.navigate('OrderFinal');
  };

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.image)}
      <Container>
        <Text>Price : $ 34.99</Text>
        <Text>Service Due: returend by Thursday</Text>
        <Text>Cleaner's Info</Text>
        <Button
          title="PLACE MY ORDER"
          containerStyle={{ paddingVertical: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={handleSubmit}
        />
        <Button
          title="CANCEL"
          containerStyle={{ paddingVertical: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: '#939393',
            height: 50,
            borderRadius: 7,
          }}
          onPress={handleClickCancel}
        />
      </Container>
    </ScrollViewContailner>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: #737272;
  font-size: 16px;
`;

OrderConfirmScreen.propTypes = {
  navigation: PropTypes.object,
  requestComplete: PropTypes.func,
  orders: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrderConfirmScreen);
