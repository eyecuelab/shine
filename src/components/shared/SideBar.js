import React from 'react';
import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const SideBar = (props) => (
  <DrawerContentScrollView {...props}>
    <ImageBackground source={require('../../../assets/images/profile-bg.png')}>
      <Profile source={require('../../../assets/images/profile-pic.png')} />
      <Name>Shoe Shiner</Name>
    </ImageBackground>

    <Container forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItemList {...props} />
    </Container>
  </DrawerContentScrollView>
);

const Container = styled.View`
  flex: 1;
`;

const ImageBackground = styled.ImageBackground`
  width: undefined;
  padding: 16px;
  padding-top: 48px;
`;

const Profile = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 3px;
  border-color: #fff;
`;

const Name = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  margin-vertical: 8px;
  font-family: Marison-Sans-Round;
`;

export default SideBar;
