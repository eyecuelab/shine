import React, { useState } from "react";
import { ScrollView, Switch } from "react-native";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

const SERVICES = [ 
  'ADD POLISH', 'ADD RAIN PROTECTION', 'REPLACE SHOELACES'
];

const OrderDetailScreen = () => {
  const route = useRoute();
  const { image } = route.params;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <ImageArea source={{ uri: image }}/>
      <Container>
        <BodyText>ADD POLISH </BodyText>
          <SwitchContainer>
            <Switch
              style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
              trackColor={{ false: "#767577", true: "#E6E6E6" }}
              thumbColor={isEnabled ? "#CBB387" : "#E6E6E6"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </SwitchContainer>
        
      </Container>
    </>
  );
};  

const ImageArea = styled.Image`
  flex: .75;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  background: white;
  flex: 1;
  align-items: center;
`;

const BodyText = styled.Text`
  text-align: center;
  margin-top: 50px;
  color: black;
  font-size: 18px;
`;

const SwitchContainer = styled.View`

`;


export default OrderDetailScreen;