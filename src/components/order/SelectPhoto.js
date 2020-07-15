import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { PickImage, TakePhoto } from '../shared/UploadPhotoFunctions';

const SelectPhoto = ({ jumpTo, image, setImage }) => {
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
        onPress={() => PickImage({ setImage: setImage })}
      />
      <Button
        title="TAKE A PHOTO"
        containerStyle={{ paddingTop: 20, width: 350 }}
        buttonStyle={{
          backgroundColor: '#2C2C2C',
          height: 50,
          borderRadius: 7,
        }}
        onPress={() => TakePhoto({ setImage: setImage })}
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
