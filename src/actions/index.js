import * as types from './types';

let nextOrderId = 0;

export const addOrder = (order) => {
  return {
    type: types.ADD_ORDER,
    id: nextOrderId++,
    payload: order,
  };
};

export const addAddOns = (addOns) => {
  return {
    type: types.ADD_ADD_ONS,
    payload: addOns,
  };
};

export const addOrderAddress = (orderAddress) => {
  return {
    type: types.ADD_ORDER_ADDRESS,
    payload: orderAddress,
  };
};
