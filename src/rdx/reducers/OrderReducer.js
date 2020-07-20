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
      return {
        ...state,
        orders: state.orders.map((item) => {
          if (item.attributes.uuid === action.payload.data.attributes.uuid) {
            return {
              type: action.payload.data.type,
              id: action.payload.data.id,
              links: action.payload.links,
              attributes: action.payload.data.attributes,
            };
          }
          return item;
        }),
        selectedOrder: action.payload,
      };
    case types.GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        selectedOrder: action.payload,
      };
    case types.QUOTE_ACCEPT_SUCCESS:
      return {
        ...state,
        orders: state.orders.map((item) => {
          if (item.attributes.uuid === action.payload.data.attributes.uuid) {
            return {
              type: action.payload.data.type,
              id: action.payload.data.id,
              links: action.payload.links,
              attributes: action.payload.data.attributes,
            };
          }
          return item;
        }),
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

    case types.REQUEST_COMPLETE:
      console.log('REQUEST REDUCER:', action.payload);
      return {
        ...state,
        orders: state.orders.map((item) => {
          if (item.attributes.uuid === action.payload.data.attributes.uuid) {
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
