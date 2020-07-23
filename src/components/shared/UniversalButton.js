import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const UniversalButton = ({ title, onPress, width }) => {
  return (
    <Button
      title={title}
      containerStyle={{ paddingVertical: 20, width: width }}
      titleStyle={{ fontFamily: 'Raleway-Bold' }}
      buttonStyle={{
        backgroundColor: '#4a4a4a',
        height: 50,
        borderRadius: 7,
      }}
      onPress={onPress}
    />
  );
};

UniversalButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  width: PropTypes.number,
};

export default UniversalButton;
