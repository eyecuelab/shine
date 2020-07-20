import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
// import PriceTagWhite from '../../components/shared/PriceTagWhite';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';
// import AddOnSwitch from '../../components/order/AddOnSwitch';

const OrderConfirmScreen = ({ navigation, cleaner, quoteAcceptWatcher }) => {
  const route = useRoute();
  const item = route.params;
  const cleanerID = item.id;
  // const currentDate = new Date();
  // console.log('CONFRIRM', currentDate);

  const onSubmit = () => {
    quoteAcceptWatcher({
      cleaner_id: cleanerID,
    });
    // navigation.navigate('Home');
  };

  const onCancel = () => {
    navigation.navigate('OrderFinal');
  };

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.image)}
      <Container>
        <TextContainer>
          <Text>Price : $ {item.attributes.quoted_price}</Text>
          <Text>Service Due: {item.attributes.delivery_by}</Text>
        </TextContainer>

        <Button
          title="PLACE MY ORDER"
          containerStyle={{ paddingVertical: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={onSubmit}
        />
        <Button
          title="SEE OTHER QUOTES"
          containerStyle={{ paddingVertical: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: '#939393',
            height: 50,
            borderRadius: 7,
          }}
          onPress={onCancel}
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

const TextContainer = styled.View`
  width: 100%
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const Text = styled.Text`
  font-size: 20px;
  margin: 10px 10px 10px 25px;
`;

OrderConfirmScreen.propTypes = {
  navigation: PropTypes.object,
  cleaner: PropTypes.object,
  quoteAcceptWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(OrderConfirmScreen);
