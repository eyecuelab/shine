import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { PickImage, TakePhoto } from '../shared/UploadPhotoFunctions';
import UniversalButton from '../../components/shared/UniversalButton';

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
      <UniversalButton
        title={'UPLOAD PHOTO'}
        width={350}
        onPress={() => PickImage({ setImage: setImage })}
      />
      <UniversalButton
        title={'TAKE A PHOTO'}
        width={350}
        onPress={() => TakePhoto({ setImage: setImage })}
      />
    </Container>
  ) : (
    <Container>
      <ImageArea source={{ uri: image }} />
      <Container>
        <UniversalButton
          title={'CHANGE PHOTO'}
          width={350}
          onPress={() => setImage('empty.img')}
        />
        <UniversalButton
          title={'CONTINUE'}
          width={350}
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
