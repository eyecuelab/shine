import React from 'react';
import { Switch } from 'react-native';

const UnselectedSwitch = () => {
  return (
    <Switch
      style={{
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        marginBottom: 5,
      }}
      value={true}
      trackColor={{ false: '#E6E6E6', true: '#E6E6E6' }}
      // eslint-disable-next-line no-constant-condition
      thumbColor={true ? '#939393' : '#f4f3f4'}
      ios_backgroundColor="#E6E6E6"
      disabled={true}
    />
  );
};

export default UnselectedSwitch;
