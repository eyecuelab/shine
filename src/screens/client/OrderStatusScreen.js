import React from 'react';
import { Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import TopImage from '../../components/shared/Image';
import PriceWhite from '../../components/shared/PriceWhite';
import DashLine from '../../components/shared/Dash';
import DashedLine from '../../components/shared/Dash';
import AdditionalServiceSwitch from '../../components/order/AdditionalServiceSwitch';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const OrderStatusScreen = () => {
  return (
    <ScrollViewContailner>
      {TopImage()}
      <TopContainer>
        <PriceTicketContainer>
          <PriceTicket
            source={require('../../../assets/images/price-ticket-beige.png')}
          />
          <PriceContianer>
            {PriceWhite(34, 99)}
            <DueText>RETURNED BY THURSDAY</DueText>
          </PriceContianer>
          <ServiceText>ADD POLISH, ADD RAIN PROTECTION</ServiceText>
        </PriceTicketContainer>
      </TopContainer>

      <BottomContainer>
        <MapArea
          source={require('../../../assets/images/default-map.png')}
        ></MapArea>
        <TextBox>532 NW 12th Ave. Portland, OR 97209</TextBox>
        <DashedLine />
        <TextBox>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TextBox>
        <DashedLine />
        <SwitchTextContainer>
          <SwitchText>SHOES PICKED UP</SwitchText>
          <SwitchText>SHOES CLEANED</SwitchText>
          <SwitchText>SHOES POLISHED</SwitchText>
          <SwitchText>REQUEST PAYMENT</SwitchText>
          <SwitchText>SHOES DROPPED OFF</SwitchText>
        </SwitchTextContainer>
        <SwitchContainer>
          <AdditionalServiceSwitch />
        </SwitchContainer>
        <DashedLine />
      </BottomContainer>
    </ScrollViewContailner>
  );
};

const TopContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: ${HEIGHT / 2.3}px;
  margin-bottom: 50px;
  position: absolute;
  border: 1px solid blue;
`;

const BottomContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid red;
`;

const PriceTicketContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border: 1px solid black;
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

const ServiceText = styled.Text`
  color: #cbb387;
  font-size: 18px;
  font-family: Marison-Sans-Round;
`;

const TextBox = styled.Text`
  color: #2c2c2c;
  font-size: 18px;
  text-align: left;
  padding-horizontal: 40px;
`;

const MapArea = styled.Image`
  margin-bottom: 20px;
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

export default OrderStatusScreen;
