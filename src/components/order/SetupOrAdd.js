import React from 'react';
import styled from 'styled-components/native';
import ShoePhoto from '../shared/ShoePhoto';
import PropTypes from 'prop-types';
import UniversalButton from '../../components/shared/UniversalButton';

const SetupOrAdd = ({ image, navigation, submit, orderInfo }) => {
  const handleSubmit = () => {
    submit();
    navigation.navigate('OrderDetail', orderInfo);
  };

  return (
    <>
      {ShoePhoto(image)}
      <Container>
        <BodyText>THE CLEANERS ARE READY TO WORK! </BodyText>
        <UniversalButton
          title={'SET UP JOB'}
          width={350}
          onPress={handleSubmit}
        />
      </Container>
    </>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const BodyText = styled.Text`
  font-family: Raleway-Bold
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
  font-size: 16px;
`;

SetupOrAdd.propTypes = {
  navigation: PropTypes.object,
  image: PropTypes.any,
  submit: PropTypes.func,
  orderInfo: PropTypes.object,
};

export default SetupOrAdd;
