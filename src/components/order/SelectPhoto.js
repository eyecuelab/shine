import React, { useState, useEffect } from 'react';
import { Button, Image, View, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const options = {
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
};

const { width, height } = Dimensions.get("window");

const SelectPhoto = () => {
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

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(options);
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const TakePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync(options);
    console.log(result.uri);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  } 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={PickImage} />
      <Button title="Take a photo" onPress={TakePhoto} />
      {image && <Image source={{ uri: image }} style={{ width: width, height: height / 2 }} />}
    </View>
  );
}

export default SelectPhoto;