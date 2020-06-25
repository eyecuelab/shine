import React from 'react';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import AdditionalServiceSwitch from '../../components/order/AdditionalServiceSwitch';
import TopImage from '../../components/shared/Image';
import PriceWhite from '../../components/shared/PriceWhite';

const OrderFinalScreen = ({ navigation }) => {
  // const route = useRoute();
  // const { image } = route.params;

  return (
    <ScrollViewContailner>
      {TopImage()}
      <Container>
        <Text>You've recieved cleaning quotes!</Text>
        <SwitchTextContainer>
          <SwitchText>ADD POLISH</SwitchText>
          <SwitchText>ADD RAIN PROTECTION</SwitchText>
          <SwitchText>REPLACE SHOELACES</SwitchText>
        </SwitchTextContainer>
        <SwitchContainer>
          <AdditionalServiceSwitch />
        </SwitchContainer>

        <PriceTicketContainer>
          <PriceTicket
            source={require('../../../assets/images/price-ticket.png')}
          />
          <PriceContianer>{PriceWhite(35, 99)}</PriceContianer>
          <DueText>RETURNED BY THURSDAY</DueText>
        </PriceTicketContainer>
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

const PriceTicketContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PriceTicket = styled.Image`
  margin: 30px;
  position: absolute;
`;

const PriceContianer = styled.View`
  flex-wrap: wrap;
  width: 200px;
`;

const DueText = styled.Text`
  flex-wrap: wrap;
  color: #e6e6e6;
  font-size: 14px;
  font-weight: 700;
`;

export default OrderFinalScreen;
