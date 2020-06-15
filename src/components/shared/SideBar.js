import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const SideBar = props => (
  <DrawerContentScrollView {...props}>
    <ImageBackground
      source={require("../../../assets/images/profile-bg.png")}
    >
      <Profile source={require("../../../assets/images/profile-pic.png")} />
      <Name>Shoe Shiner</Name>
    </ImageBackground>

    <Container forceInset={{ top: "always", horizontal: "never" }}>
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
  paddingTop: 48px;
`;

const Profile = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 3px;
  border-color: #FFF;
`;

const Name = styled.Text`
  color: #FFF;
  fontSize: 20px;
  fontWeight: 800;
  margin-vertical: 8px
`;

export default SideBar;