import React, { useState, useEffect } from 'react';
import { ScrollView, Switch } from "react-native";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

const OrderDetailScreen = () => {
  const route = useRoute();
  const { image } = route.params;

  const [services, setServices] = useState([]);

  const isSelected = service => services.some(s => s === service);

  const addService = service => {
    if (!isSelected(service)) {
      setServices([...services, service]);
    }
  };

  const removeService = service => {
    if (isSelected(service)) {
      setServices(services.filter(s => s !== service));
    }
  };  
  
  const toggleState = service => 
    isSelected(service) ? removeService(service) : addService(service);  


  const [addPolish, setAddPolish] = useState(false);
  const togglePolish = () => { 
    setAddPolish(previousState => !previousState)
  }  

  const [addRainProtection, setAddRainProtection] = useState(false);
  const toggleRainProtection = () => { 
    setAddRainProtection(previousState => !previousState)
  }  

  const [replaceShoelaces, setReplaceShoelaces] = useState(false);
  const toggleShoelaces = () => { 
    setReplaceShoelaces(previousState => !previousState)
  }  

  console.log("Service", services);

  return (
    <>
      <ImageArea source={{ uri: image }}/>
      <Container>
        <BodyText>ADD POLISH </BodyText>
          <SwitchContainer>
            <Switch
              style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
              trackColor={{ false: "#767577", true: "#E6E6E6" }}
              thumbColor={addPolish ? "#CBB387" : "#f4f3f4"}
              ios_backgroundColor="#f4f3f4"
              onChange={() => toggleState("POLISH")}
              onValueChange={togglePolish}
              value={addPolish}
            />
            <Switch
              style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
              trackColor={{ false: "#767577", true: "#E6E6E6" }}
              thumbColor={addRainProtection ? "#CBB387" : "#f4f3f4"}
              ios_backgroundColor="#f4f3f4"
              onChange={() => toggleState("RAIN-PROTECTION")}
              onValueChange={toggleRainProtection}
              value={addRainProtection}
            />
            <Switch
              style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
              trackColor={{ false: "#767577", true: "#E6E6E6" }}
              thumbColor={replaceShoelaces ? "#CBB387" : "#f4f3f4"}
              ios_backgroundColor="#f4f3f4"
              onChange={() => toggleState("REPLACE-SHOELACE")}
              onValueChange={toggleShoelaces}
              value={replaceShoelaces}
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
  margin-left: auto;
`;


export default OrderDetailScreen;