import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const ShoePhoto = (imageURI) => {
  return imageURI ? (
    <ImgContainer>
      <ImageArea source={{ uri: imageURI }} />
    </ImgContainer>
  ) : (
    <ImgContainer>
      <ImageArea
        source={{
          uri:
            'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        }}
      />
    </ImgContainer>
  );
};

const ImgContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3.1}px;
  margin-bottom: 30px;
`;

const ImageArea = styled.Image`
  width: 100%;
  height: 100%;
`;

ShoePhoto.propTypes = {
  imageURI: PropTypes.string,
};

export default ShoePhoto;
