import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { setStatus } from '../../rdx/actions';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const ListItem = ({ order }) => {
  console.log('ORDER', order.attributes.shoes_picked_up);
  const [status, setStatus] = useState('');
  const info = order.attributes;

  useEffect(() => {
    getStatus();
  }, []);
  console.log(info);
  const getStatus = () => {
    if (info.dropped_off) {
      setStatus('Complete');
    } else if (info.request_payment) {
      setStatus('Payment Requested');
    } else if (info.shoes_polished) {
      setStatus('Polished');
    } else if (info.shoes_cleaned) {
      setStatus('Cleaned');
    } else if (info.shoes_picked_up) {
      setStatus('Picked Up');
    } else if (info.quote_accepted_at !== null) {
      setStatus('In Progress');
    } else {
      setStatus('');
    }
  };
  console.log(status.length);

  return order.attributes.image_url === null ? (
    <Image
      // eslint-disable-next-line no-undef
      source={require('../../../assets/images/shoes_placeholder.png')}
    />
  ) : (
    <ImageArea
      source={{ uri: order.attributes.image_url }}
      imageStyle={{ borderRadius: 25 }}
    >
      {status.length !== 0 ? <StatusText>{status}</StatusText> : null}
    </ImageArea>
  );
};

const StatusText = styled.Text`
  font-family: Raleway-Bold;
  background-color: rgba(50, 168, 82, 0.5)
  color: white;

  font-size: 16px;
  padding: 5px;
`;

const ImageArea = styled.ImageBackground`
  width: ${WIDTH / 2.4}px;
  height: ${HEIGHT / 5}px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: ${WIDTH / 2.4}px;
  height: ${HEIGHT / 5}px;
  border-radius: 15px;
`;

ListItem.propTypes = {
  order: PropTypes.object,
};

export default ListItem;
