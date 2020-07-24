import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const UniversalButton = ({ title, onPress, width }) => {
  return (
    <Button
      title={title}
      containerStyle={{ paddingTop: 20, width: width }}
      titleStyle={{ fontFamily: 'Marison-Sans-Round' }}
      buttonStyle={{
        backgroundColor: '#4a4a4a',
        height: 40,
        paddingTop: 12,
        borderRadius: 20,
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
