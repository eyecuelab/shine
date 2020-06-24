import * as c from '../actions/types';

const orders = (state = [], action) => {
  switch (action.type) {
    case c.ADD_ORDER:
      return [
        ...state,
        {
          id: action.id,
          image: action.payload.image,
          shoeTypes: action.payload.shoeTypes,
          timeFrame: action.payload.timeFrame,
          note: action.payload.note,
          price: action.payload.price,
        },
      ];
    default:
      return state;
  }
};

export default orders;
