let nextOrderId = 0;

export const addOrder = (order) => {
  return {
    type: 'add_order',
    id: nextOrderId++,
    image: order.image,
    shoeTypes: order.shoeTypes,
    timeFrame: order.TimeFrame,
    note: order.note,
    price: order.price,
  };
};
