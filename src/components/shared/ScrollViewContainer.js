import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const ScrollViewContainer = ({ contentContainerStyle, children }) => {
  return (
    <ScrollView
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={{
        flex: 0,
        position: 'relative',
        justifyContent: 'flex-start',
        ...contentContainerStyle,
      }}
    >
      {children}
    </ScrollView>
  );
};

ScrollViewContainer.propTypes = {
  contentContainerStyle: PropTypes.object,
};

export default ScrollViewContainer;
