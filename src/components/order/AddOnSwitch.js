import React from 'react';
import { Switch } from 'react-native';
import PropTypes from 'prop-types';

const AddOnSwitch = ({ switchState, setSwitchState, disabled }) => {
  return (
    <Switch
      disabled={disabled}
      value={switchState}
      onValueChange={setSwitchState}
      style={{
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        marginBottom: 5,
      }}
      trackColor={{ switchState: '#939393', true: '#E6E6E6' }}
      thumbColor={switchState ? '#CBB387' : '#f4f3f4'}
      ios_backgroundColor="#f4f3f4"
    />
  );
};

AddOnSwitch.propTypes = {
  switchState: PropTypes.bool,
  setSwitchState: PropTypes.func,
  disabled: PropTypes.bool,
};

export default AddOnSwitch;
