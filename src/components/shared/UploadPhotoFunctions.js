import { RNS3 } from 'react-native-aws3';
import getEnvVars from '../../../environment';

const { AWSAccessKeyId, AWSSecretKey } = getEnvVars();

import * as ImagePicker from 'expo-image-picker';

const options = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
};

const config = {
  keyPrefix: 's3/',
  bucket: 'shoeshine-dev-drake',
  region: 'us-west-2',
  accessKey: AWSAccessKeyId,
  secretKey: AWSSecretKey,
  successActionStatus: 201,
};

export const PickImage = async ({ setImage }) => {
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

    RNS3.put(file, config).then((response) => {
      setImage(response.body.postResponse.location);
    });
  }
};

export const TakePhoto = async ({ setImage }) => {
  let result = await ImagePicker.launchCameraAsync(options);

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

    RNS3.put(file, config).then((response) => {
      setImage(response.body.postResponse.location);
    });
  }
};

export const UploadImage = ({ result, setImage }) => {
  let localUri = result.uri;
  let fileName = localUri.split('/').pop();

  let match = /\.(\w+)$/.exec(fileName);
  let type = match ? `image/${match[1]}` : `image`;

  const file = {
    uri: localUri,
    name: fileName,
    type: type,
  };

  RNS3.put(file, config).then((response) => {
    setImage(response.body.postResponse.location);
  });
};
