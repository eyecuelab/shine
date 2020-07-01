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
    type: types.LOGIN_WATCHER,
    payload: authParams,
  };
};

export const updateProfile = (profile) => {
  return {
    type: types.UPDATE_PROFILE,
    payload: profile,
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};

// export const loginError = (error) => {
//   return {
//     type: types.LOGIN_ERROR,
//     payload: error,
//   };
// };
