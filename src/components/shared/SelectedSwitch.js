import React from 'react';
import { Switch } from 'react-native';

const SelectedSwitch = () => {
  return (
    <Switch
      style={{
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        marginBottom: 5,
      }}
      trackColor={'#939393'}
      thumbColor={'#9c7a3b'}
      ios_backgroundColor="#f4f3f4"
      disabled={true}
    />
  );
};

export default SelectedSwitch;
