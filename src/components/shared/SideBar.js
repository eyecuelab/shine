import * as React from 'react';
import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const SideBar = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Container forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItemList {...props} />
      </Container>
    </DrawerContentScrollView>
  );
};

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
