/* eslint-disable no-undef */
import Constants from 'expo-constants';
// import { Platform } from 'react-native';

// const localhost = Platform.OS === 'ios' ? 'http://127.0.0.1:8080' : '10.0.2.2:';

const remotehost = 'https://shoeshine.herokuapp.com';

const ENV = {
  dev: {
    apiUrl: remotehost,
    AWSAccessKeyId: 'AWS ACCESS KEY HERE',
    AWSSecretKey: 'AWS SECRET HERE',
  },
  staging: {
    apiUrl: remotehost,
    AWSAccessKeyId: 'AWS ACCESS KEY HERE',
    AWSSecretKey: 'AWS SECRET HERE',
  },
  prod: {
    apiUrl: remotehost,
    AWSAccessKeyId: 'AWS ACCESS KEY HERE',
    AWSSecretKey: 'AWS SECRET HERE',
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'staging') {
    return ENV.staging;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;
