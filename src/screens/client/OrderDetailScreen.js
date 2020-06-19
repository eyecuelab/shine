import React, { useState, useEffect } from 'react';
import { ScrollView, Switch, Text } from "react-native";
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
        <BodyTextContainer>
          <BodyText>ADD POLISH</BodyText>
          <BodyText>ADD RAIN PROTECTION</BodyText>
          <BodyText>REPLACE SHOELACES</BodyText>
        </BodyTextContainer>
        <SwitchContainer>
          <Switch
            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }], marginBottom: 5 }}
            trackColor={{ false: "#767577", true: "#E6E6E6" }}
            thumbColor={addPolish ? "#CBB387" : "#f4f3f4"}
            ios_backgroundColor="#f4f3f4"
            onChange={() => toggleState("POLISH")}
            onValueChange={togglePolish}
            value={addPolish}
          />
          <Switch
            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }], marginBottom: 5 }}
            trackColor={{ false: "#939393", true: "#E6E6E6" }}
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
        <PriceTextContainer>
          <BodyText>ROUGH EST.</BodyText>
        </PriceTextContainer>
        <PriceContianer>
          <DollarSign>$ <DallarsText>35</DallarsText><CentsText>99</CentsText></DollarSign>
        </PriceContianer>
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
  flex-direction: row;
  flex-wrap: wrap;
`;

const BodyTextContainer = styled.View`
  margin: 50px 90px 30px 0px;
`;

const BodyText = styled.Text`
  text-align: left;
  margin: 15px 0px 0px 30px;
  color: black;
  font-size: 18px;
`;

const SwitchContainer = styled.View`
  margin: 50px 0px 30px 0px
  padding-top: 10px;
  border: 5px
  border-color: black;
`;

const PriceTextContainer = styled.View`
  margin-right: 110px;
  border: 5px
  border-color: black;
`;

const PriceContianer = styled.View`
  border: 5px
  border-color: black;
`;

const DollarSign = styled.Text`
  align-items: flex-start;
  color: black;
  font-size: 25px;
  font-family: Marison-Sans-Round;
`;

const DallarsText = styled.Text`
  color: black;
  font-size: 100px;
  font-family: Marison-Script-Vintage;
`;

const CentsText = styled.Text`
  color: black;
  font-size: 80px;
  font-family: Marison-Script-Vintage;
  text-decoration-line: underline;
`;

export default OrderDetailScreen;