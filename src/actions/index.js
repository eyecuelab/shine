import * as types from './types';
import uuid from 'react-native-uuid';

export const addOrder = (order) => {
  return {
    type: types.ADD_ORDER,
    uuid: uuid.v4(),
    payload: order,
  };
};

export const addAddOns = (uuid, addOns) => {
  return {
    type: types.ADD_ADD_ONS,
    uuid: uuid,
    payload: addOns,
  };
};

export const addOrderAddress = (uuid, orderAddress) => {
  return {
    type: types.ADD_ORDER_ADDRESS,
    uuid: uuid,
    payload: orderAddress,
  };
};

export const requestComplete = (uuid, requestCompleted) => {
  return {
    type: types.REQUEST_COMPLETE,
    uuid: uuid,
    payload: requestCompleted,
  };
};
