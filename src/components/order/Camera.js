import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get("window");

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  return (
    <CenterView>
      <Camera 
        style={{ 
          flex: 1,
          width: width,
          height: height / 2
        }} 
        type={type}
      >
        <IconBar>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <MaterialIcons name="switch-camera" size={36} color="white" />  
          </TouchableOpacity>
        </IconBar>
      </Camera>  
    </CenterView>
  );
}

const CenterView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`;

const IconBar = styled.View`
  flex: 0.1;
  margin: 20px 20px 0px 0px;
  align-self: flex-end;
  align-items: center;
`;

export default CameraScreen;