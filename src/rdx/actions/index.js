import * as types from './types';
import uuid from 'uuid';

export const loadOrders = () => {
  return {
    type: types.LOAD_ORDERS,
  };
};

export const setOrders = (orders) => {
  return {
    type: types.LOAD_ORDERS_SUCCESS,
    payload: orders,
  };
};

export const setError = (error) => {
  return {
    type: types.LOAD_ORDERS_FAIL,
    error,
  };
};

export const postOrder = (order) => {
  // console.log('ACTION:', order);
  return {
    type: types.POST_ORDER,
    payload: order,
  };
};
export const setPostError = (error) => {
  return {
    type: types.POST_ORDER_FAIL,
    error,
  };
};

export const reloadOrders = (result) => {
  return {
    type: types.POST_ORDER_SUCCESS,
    result,
  };
};

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
export const loginWatcher = (user) => {
  return {
    type: types.LOGIN_WATCHER,
    payload: user,
  };
};

export const logIn = (profile) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: profile,
  };
};

export const logoutWatcher = (token) => {
  return {
    type: types.LOGOUT_WATCHER,
    payload: token,
  };
};

export const logOut = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};

export const signupWatcher = (user) => {
  return {
    type: types.SIGNUP_WATCHER,
    payload: user,
  };
};

export const signUp = () => {
  return {
    type: types.SIGNUP_SUCCESS,
  };
};

export const addCleanerProfile = (address, profile) => {
  return {
    type: types.ADD_CLEANER_PROFILE,
    id: uuid.v4(),
    address: address,
    payload: profile,
  };
};
