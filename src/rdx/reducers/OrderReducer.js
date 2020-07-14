import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case REHYDRATE:
      return [];
    case types.LOAD_ORDERS_SUCCESS:
      return [...action.payload];
    // case types.ADD_ORDER:
    //   return [
    //     ...state,
    //     {
    //       uuid: action.payload.uuid,
    //       image: action.payload.image,
    //       shoeTypes: action.payload.shoeTypes,
    //       timeFrame: action.payload.timeFrame,
    //       note: action.payload.note,
    //       estimatedPrice: action.payload.price,
    //       addOns: {
    //         polish: false,
    //         rainProtection: false,
    //         replaceLaces: false,
    //       },
    //       orderAddress: {
    //         streetAddress: '',
    //         aptNumber: '',
    //         zipCode: '',
    //       },
    //       requestCompleted: false,
    //       createdAt: null,
    //       updatedAt: null,
    //       publishedAt: null,
    //       quoteAcceptedAt: null,
    //       cleanerId: null,
    //       userId: null,
    //       completedAt: null,
    //       deletedAt: null,
    //     },
    //   ];
    // case types.ADD_ADD_ONS:
    //   return state.map((item) => {
    //     if (item.uuid === action.uuid) {
    //       return {
    //         ...item,
    //         addOns: action.payload,
    //       };
    //     }

    //     return item;
    //   });
    // case types.ADD_ORDER_ADDRESS:
    //   return state.map((item) => {
    //     if (item.uuid === action.uuid) {
    //       return {
    //         ...item,
    //         orderAddress: action.payload,
    //       };
    //     }
    //     return item;
    //   });
    case types.REQUEST_COMPLETE:
      return state.map((item) => {
        if (item.uuid === action.uuid) {
          return {
            ...item,
            requestCompleted: action.payload,
          };
        }
        return item;
      });
    // case types.DELETE_ORDER:
    //   return state.filter((item) => item.uuid !== action.uuid);
    default:
      return state;
  }
};

export default orderReducer;
