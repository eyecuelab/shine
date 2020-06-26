import * as types from './types';

let nextOrderId = 0;

export const addOrder = (order) => {
  return {
    type: types.ADD_ORDER,
    id: nextOrderId++,
    payload: order,
  };
};

export const addAddOns = (id, addOns) => {
  return {
    type: types.ADD_ADD_ONS,
    id: id,
    payload: addOns,
  };
};

export const addOrderAddress = (id, orderAddress) => {
  return {
    type: types.ADD_ORDER_ADDRESS,
    id: id,
    payload: orderAddress,
  };
};
