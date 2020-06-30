import * as types from '../actions/types';

const orders = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ORDER:
      console.log('REDUCER: ', action.payload.image);
      return [
        ...state,
        {
          uuid: action.payload.uuid,
          image: action.payload.image,
          shoeTypes: action.payload.shoeTypes,
          timeFrame: action.payload.timeFrame,
          note: action.payload.note,
          estimatedPrice: action.payload.price,
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
          requestCompleted: false,
        },
      ];
    case types.ADD_ADD_ONS:
      return state.map((item, index) => {
        if (item.uuid === action.uuid) {
          return {
            ...item,
            addOns: action.payload,
          };
        }
        // console.log('ADDONS: ', item);
        return item;
      });
    case types.ADD_ORDER_ADDRESS:
      return state.map((item, index) => {
        if (item.uuid === action.uuid) {
          return {
            ...item,
            orderAddress: action.payload,
          };
        }
        return item;
      });
    case types.REQUEST_COMPLETE:
      return state.map((item, index) => {
        if (item.uuid === action.uuid) {
          return {
            ...item,
            requestCompleted: action.payload,
          };
        }
      });
    default:
      return state;
  }
};

export default orders;
