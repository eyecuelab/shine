import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import Image from '../shared/Image';
import PropTypes from 'prop-types'

const SetupOrAdd = ({ image, navigation }) => {
  return (
    <>
      {Image(image)}
      <Container>
        <BodyText>The Cleaners are ready to work!</BodyText>
        <Button
          title="SET UP JOB"
          containerStyle={{paddingTop: 20, width: 350 }}
          buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
          onPress={() => {
            navigation.navigate('OrdersList', {image})
          }}
        />
        <Button
          title="ADD ANOTHER PAIR"
          containerStyle={{paddingTop: 20, width: 350 }}
          buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
          onPress={() => {
            navigation.navigate('Home', {image})
            // jumpTo('first')
          }}
        />
      </Container>
    </>
  );
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const BodyText = styled.Text`
  font-weight: bold
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: black;
  font-size: 18px;
`;

SetupOrAdd.propTypes = {
  navigation: PropTypes.object,
  image: PropTypes.any
}

export default SetupOrAdd;