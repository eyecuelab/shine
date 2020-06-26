import * as types from '../actions/types';

const orders = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ORDER:
      console.log('ACTION: ', action.payload.orderInfo.image);
      return [
        ...state,
        {
          id: action.id,
          image: action.payload.orderInfo.image,
          shoeTypes: action.payload.orderInfo.shoeTypes,
          timeFrame: action.payload.orderInfo.timeFrame,
          note: action.payload.orderInfo.note,
          price: action.payload.orderInfo.price,
          addOns: {
            polish: false,
            rainProtection: false,
            replaceLaces: false,
          },
          orderAddress: {
            streetAddress: '',
            aptNumber: '',
            zipCode: '',
          },
        },
      ];
    default:
      return state;
  }
};

export default orders;
