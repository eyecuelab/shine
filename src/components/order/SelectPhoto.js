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
        width={275}
        onPress={() => PickImage({ setImage: setImage })}
      />
      <UniversalButton
        title={'TAKE A PHOTO'}
        width={275}
        onPress={() => TakePhoto({ setImage: setImage })}
      />
    </Container>
  ) : (
    <Container>
      <ImageArea source={{ uri: image }} />
      <LoadedContainer>
        <UniversalButton
          title={'CHANGE PHOTO'}
          width={275}
          onPress={() => setImage('empty.img')}
        />
        <UniversalButton
          title={'CONTINUE'}
          width={275}
          onPress={() => {
            jumpTo('second');
          }}
        />
      </LoadedContainer>
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
const LoadedContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

SelectPhoto.propTypes = {
  navigation: PropTypes.object,
  jumpTo: PropTypes.func,
  image: PropTypes.any,
  setImage: PropTypes.func,
};

export default SelectPhoto;
