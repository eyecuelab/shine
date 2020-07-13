import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const options = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
};

const SelectPhoto = ({ jumpTo, image, setImage }) => {
  // console.log(image);
  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.cancelled) {
      let localUri = result.uri;
      let fileName = localUri.split('/').pop();

      let match = /\.(\w+)$/.exec(fileName);
      let type = match ? `image/${match[1]}` : `image`;
      const file = {
        uri: localUri,
        name: fileName,
        type: type,
      };
      console.log(file);

      // uploadImage(result.uri, 'test-image');
      setImage(result.uri);
    }
  };

  const TakePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync(options);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // const uploadImage = async (uri, imageName) => {
  //   const response = await fetch(uri);
  //   // const blob = await response.blob();
  //   console.log(imageName);
  //   console.log(blob);
  // };

  return image === 'empty.img' ? (
    <Container>
      <Button
        title="UPLOAD PHOTO"
        containerStyle={{ paddingTop: 20, width: 350 }}
        buttonStyle={{
          backgroundColor: '#2C2C2C',
          height: 50,
          borderRadius: 7,
        }}
        onPress={PickImage}
      />
      <Button
        title="TAKE A PHOTO"
        containerStyle={{ paddingTop: 20, width: 350 }}
        buttonStyle={{
          backgroundColor: '#2C2C2C',
          height: 50,
          borderRadius: 7,
        }}
        onPress={TakePhoto}
      />
    </Container>
  ) : (
    <Container>
      <ImageArea source={{ uri: image }} />
      <Container>
        <Button
          title="CHANGE PHOTO"
          containerStyle={{ paddingTop: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: '#2C2C2C',
            height: 50,
            borderRadius: 7,
          }}
          onPress={() => setImage('empty.img')}
        />
        <Button
          title="CONTINUE"
          containerStyle={{ paddingTop: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: '#2C2C2C',
            height: 50,
            borderRadius: 7,
          }}
          onPress={() => {
            jumpTo('second');
          }}
        />
      </Container>
    </Container>
  );
};

const ImageArea = styled.Image`
  flex: 0.75;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

SelectPhoto.propTypes = {
  navigation: PropTypes.object,
  jumpTo: PropTypes.func,
  image: PropTypes.any,
  setImage: PropTypes.func,
};

export default SelectPhoto;
