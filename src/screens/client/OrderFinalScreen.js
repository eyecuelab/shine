/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
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

const OrderFinalScreen = ({ navigation }) => {
  const route = useRoute();
  const item = route.params;

  const handleSubmit = () => {
    navigation.navigate('OrderConfrim', item);
  };

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.image)}
      <Container>
        <Text>You've recieved cleaning quotes!</Text>
        <SwitchTextContainer>
          <SwitchText>ADD POLISH</SwitchText>
          <SwitchText>ADD RAIN PROTECTION</SwitchText>
          <SwitchText>REPLACE SHOELACES</SwitchText>
        </SwitchTextContainer>
        <SwitchContainer>
          <AddOnSwitch disabled={true} switchState={item.addOns.polish} />
          <AddOnSwitch
            disabled={true}
            switchState={item.addOns.rainProtection}
          />
          <AddOnSwitch disabled={true} switchState={item.addOns.replaceLaces} />
        </SwitchContainer>

        <BidsContainer>
          <PriceTicketContainer onPress={handleSubmit}>
            <PriceTicket
              source={require('../../../assets/images/price-ticket-black.png')}
            />
            <PriceContianer>
              {PriceWhite(34, 99)}
              <DueText>RETURNED BY THURSDAY</DueText>
            </PriceContianer>
            <ExpireText>Expires in 12HR</ExpireText>
          </PriceTicketContainer>

          <PriceTicketContainer onPress={handleSubmit}>
            <PriceTicket
              source={require('../../../assets/images/price-ticket-black.png')}
            />
            <PriceContianer>
              {PriceWhite(41, 99)}
              <DueText>RETURNED BY TOMORROW</DueText>
            </PriceContianer>
            <ExpireText>Expires in 3HR</ExpireText>
          </PriceTicketContainer>
          <PriceTicketContainer onPress={handleSubmit}>
            <PriceTicket
              source={require('../../../assets/images/price-ticket-black.png')}
            />
            <PriceContianer>
              {PriceWhite(47, 99)}
              <DueText>RETURNED TODAY</DueText>
            </PriceContianer>
            <ExpireText>Expires in 3MIN</ExpireText>
          </PriceTicketContainer>
        </BidsContainer>

        <Button
          title="CANCEL SERVICE"
          containerStyle={{ paddingVertical: 40, width: 350 }}
          buttonStyle={{
            backgroundColor: '#939393',
            height: 50,
            borderRadius: 7,
          }}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </Container>
    </ScrollViewContailner>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.Text`
  margin-top: 10px;
  padding-bottom: 10px;
  color: #42413c;
  font-size: 18px;
`;

const SwitchTextContainer = styled.View`
  margin-right: 90px;
`;

const SwitchText = styled.Text`
  text-align: left;
  margin: 15px 0px 0px 20px;
  color: black;
  font-size: 18px;
`;

const SwitchContainer = styled.View`
  margin-top: 40px;
  padding-top: 10px;
`;

const BidsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PriceTicketContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const PriceTicket = styled.Image`
  margin: 30px;
  flex-wrap: wrap;
`;

const PriceContianer = styled.View`
  flex-wrap: wrap;
  width: 200px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const DueText = styled.Text`
  color: #e6e6e6;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

const ExpireText = styled.Text`
  color: #939393;
  font-size: 18px;
  font-family: Marison-Sans-Round;
  text-align: center;
`;

OrderFinalScreen.propTypes = {
  navigation: PropTypes.object,
  requestComplete: PropTypes.func,
  orders: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrderFinalScreen);
