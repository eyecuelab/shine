import * as types from '../actions/types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialOrdersState = {
  orders: [],
  selectedOrder: {},
};

const orderReducer = (state = initialOrdersState, action) => {
  switch (action.type) {
    // case REHYDRATE:
    //   return {
    //     ...state,
    //   };
    case types.LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        orders: [...action.payload],
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        orders: [],
      };
    case types.PUBLISH_ORDER_SUCCESS:
      console.log('REDUCER', action.payload);
      return {
        ...state,
        selectedOrder: action.payload,
      };
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
      console.log('RE', action.payload);
      return {
        orders: state.orders.map((item) => {
          if (item.uuid === action.uuid) {
            return {
              ...item,
              requestCompleted: action.payload,
            };
          }
          return item;
        }),
      };
    // case types.DELETE_ORDER:
    //   return state.filter((item) => item.uuid !== action.uuid);
    default:
      return state;
  }
};

export default orderReducer;
