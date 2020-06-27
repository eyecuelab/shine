import * as types from '../actions/types';

const orders = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ORDER:
      return [
        ...state,
        {
          id: action.id,
          image: action.payload.orderInfo.image,
          shoeTypes: action.payload.orderInfo.shoeTypes,
          timeFrame: action.payload.orderInfo.timeFrame,
          note: action.payload.orderInfo.note,
          estimatedPrice: action.payload.orderInfo.price,
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
    case types.ADD_ADD_ONS:
      return state.map((item, index) => {
        if (item.id === action.id) {
          return {
            ...item,
            addOns: action.payload,
          };
        }
        return item;
      });
    case types.ADD_ORDER_ADDRESS:
      return state.map((item, index) => {
        if (item.id === action.id) {
          return {
            ...item,
            orderAddress: action.payload,
          };
        }
      });

    default:
      return state;
  }
};

export default orders;
