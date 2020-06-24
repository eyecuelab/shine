import * as c from './types';

let nextOrderId = 0;

export const addOrder = (order) => {
  return {
    type: c.ADD_ORDER,
    id: nextOrderId++,
    payload: order,
  };
};
