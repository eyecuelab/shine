import React, { useState, useEffect } from 'react';
import { Image, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

const options = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
};

const { width, height } = Dimensions.get("window");

const SelectPhoto = ({ navigation }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!');
        }
      }
    })();
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(options);
    // console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const TakePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync(options);
    // console.log(result.uri);
    if (!result.cancelled) {
      setImage(result.uri)
    }
  } 

  return (
    !image ? 
      (
        <Container>
          <Button title="Pick an image from camera roll" onPress={PickImage} />
          <Button title="Take a photo" onPress={TakePhoto} />
        </Container>
      ) : (  
        <Container>  
          <Image source={{ uri: image }} style={{ width: width, height: height / 2 }} />
          <Button title="Select another photo" onPress={() => setImage(null)} />
          <Button 
            title="CONTINUE"
            containerStyle={{paddingTop: 20, width: 350 }}
            buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
            onPress={() => {
              navigation.navigate('OrderSpecs', {image})
            }}
          />    
        </Container>
      )
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default SelectPhoto;