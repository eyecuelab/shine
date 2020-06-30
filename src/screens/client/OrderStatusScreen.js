/* eslint-disable no-undef */
import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import PriceWhite from '../../components/shared/PriceWhite';
import DashedLine from '../../components/shared/Dash';
import SelectedSwitch from '../../components/shared/SelectedSwitch';
import UnselectedSwitch from '../../components/shared/UnselectedSwitch';

const { height: HEIGHT } = Dimensions.get('window');

const OrderStatusScreen = () => {
  return (
    <ScrollViewContailner>
      {ShoePhoto()}
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
          <UnselectedSwitch />
          <UnselectedSwitch />
          <UnselectedSwitch />
          <UnselectedSwitch />
          <UnselectedSwitch />
        </SwitchContainer>

        <DashedLine />

        <MessageContainer>
          <TextContainer>
            <Text>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
          </TextContainer>
          <Profile source={require('../../../assets/images/profile-pic.png')} />
        </MessageContainer>

        <MessageContainer>
          <TextContainerBlack>
            <Text>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
          </TextContainerBlack>
          <Profile source={require('../../../assets/images/profile-pic.png')} />
        </MessageContainer>

        <TextInputContainer>
          <TextInput placeholder="ENTER MESSAGE HERE"></TextInput>
        </TextInputContainer>
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
`;

const BottomContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 50px;
`;

const PriceTicketContainer = styled.View`
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
  color: white;
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
  padding-top: 15px;
`;

const MessageContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

const Profile = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 1px;
  border-color: #e6e6e6;
  position: absolute;
`;

const TextContainer = styled.View`
  background-color: #cbb387;
  border-radius: 10px;
  padding: 50px 20px 20px 20px;
  margin: 40px;
`;

const TextContainerBlack = styled.View`
  background-color: #2c2c2c;
  border-radius: 10px;
  padding: 50px 20px 20px 20px;
  margin: 40px;
`;

const Text = styled.Text`
  color: white;
  font-size: 18px;
  text-align: left;
`;

const TextInputContainer = styled.View`
  width: 100%;
  margin-top: 30px;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background-color: #2c2c2c;
`;

const TextInput = styled.TextInput`
  height: 50px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  text-align: center;
`;

export default OrderStatusScreen;
