import * as types from './types';

// ORDERS actionCreators
export const addOrder = (order) => {
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

export const deleteOrder = (uuid) => {
  return {
    type: types.DELETE_ORDER,
    uuid: uuid,
  };
};

// USERS actionCreators
export const loginWatcher = (authParams) => {
  return {
    type: types.LOGIN_WATCHER,
    payload: authParams,
  };
};

export const logIn = (profile) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: profile,
  };
};

export const logOut = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};
