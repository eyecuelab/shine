import * as types from './types';

export const addOrder = (order) => {
  // console.log('Action: ', order);
  return {
    type: types.ADD_ORDER,
    payload: order.orderInfo,
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

export const loginWatcher = (authParams) => {
  return {
    type: 'LOGIN_WATCHER',
    payload: authParams,
  };
};

export const saveToken = (token) => {
  return {
    type: types.SAVE_TOKEN,
    payload: token,
  };
};

export const updateProfile = (profile) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: profile,
  };
};
