import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const UniversalButton = ({ title, onPress, width }) => {
  return (
    <Button
      title={title}
      containerStyle={{ paddingTop: 20, width: width }}
      buttonStyle={{
        backgroundColor: 'black',
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
};

export default UniversalButton;
