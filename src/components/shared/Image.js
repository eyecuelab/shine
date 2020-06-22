import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Image = (imageURI) => {
  return (
    <ImgContainer>
      <ImageArea source={{ uri: (imageURI) }} />
    </ImgContainer>  
  )
}

const ImgContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3.1}px;
  margin-bottom: 30px;
`;

const ImageArea = styled.Image`
  width: 100%;
  height:  100%;
  position: absolute;
`;

Image.propTypes = {
  image: PropTypes.string
};

export default Image;
