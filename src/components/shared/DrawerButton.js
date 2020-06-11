import React from "react";
import styled from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";

export default function DrawerButton({ navigation }) {
  return (
    <SafeAreaView>
      <Button onPress={navigation.openDrawer}>
        <FontAwesome5 name="bars" size={24} color="#161924" />
      </Button>  
    </SafeAreaView>
  );
}    

const SafeAreaView = styled.SafeAreaView`
  flex: 0.1;
`;

const Button = styled.TouchableOpacity`
  align-items: flex-end;
  margin: 18px;
`;
