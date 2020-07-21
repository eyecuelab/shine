import * as types from './types';

// ====== ORDERS ACTION CREATORS ======= //

export const loadOrders = () => {
  return {
    type: types.LOAD_ORDERS,
  };
};

export const setOrders = (orders) => {
  return {
    type: types.LOAD_ORDERS_SUCCESS,
    payload: orders,
  };
};

export const setError = (error) => {
  return {
    type: types.LOAD_ORDERS_FAIL,
    error,
  };
};

export const postOrder = (order) => {
  return {
    type: types.POST_ORDER,
    payload: order,
  };
};

export const setPostError = (error) => {
  return {
    type: types.POST_ORDER_FAIL,
    error,
  };
};

export const reloadOrders = (result) => {
  return {
    type: types.POST_ORDER_SUCCESS,
    result,
  };
};

export const addOrder = (order) => {
  return {
    type: types.ADD_ORDER,
    payload: order.orderInfo,
  };
};

export const addAddOns = (uuid, addOns) => {
  return {
    type: types.ADD_ADD_ONS,
    uuid: uuid,
    payload: addOns,
  };
};

export const addOrderAddress = (uuid, orderAddress) => {
  return {
    type: types.ADD_ORDER_ADDRESS,
    uuid: uuid,
    payload: orderAddress,
  };
};

export const requestComplete = (uuid, requestCompleted) => {
  return {
    type: types.REQUEST_COMPLETE,
    uuid: uuid,
    payload: requestCompleted,
  };
};

export const publishOrderWatcher = ({ orderID, publishedAt }) => {
  return {
    type: types.PUBLISH_ORDER_WATCHER,
    payload: { orderID, publishedAt },
  };
};

export const setPublishedOrder = (payload) => {
  return {
    type: types.PUBLISH_ORDER_SUCCESS,
    payload,
  };
};

export const setPublishError = (error) => {
  return {
    type: types.PUBLISH_ORDER_FAIL,
    error,
  };
};

export const deleteOrderWatcher = (payload) => {
  return {
    type: types.DELETE_ORDER_WATCHER,
    payload,
  };
};

export const deleteOrderError = (error) => {
  return {
    type: types.DELETE_ORDER_ERROR,
    error,
  };
};

export const getOrderByIdWatcher = (payload) => {
  return {
    type: types.GET_ORDER_BY_ID_WATCHER,
    payload,
  };
};

export const setSelectedOrder = (payload) => {
  return {
    type: types.GET_ORDER_BY_ID_SUCCESS,
    payload,
  };
};

export const setGetOrderByIdError = (error) => {
  return {
    type: types.GET_ORDER_BY_ID_ERROR,
    error,
  };
};

export const quoteAcceptWatcher = (payload) => {
  return {
    type: types.QUOTE_ACCEPT_WATCHER,
    payload,
  };
};

export const quoteAccepted = (payload) => {
  return {
    type: types.QUOTE_ACCEPT_SUCCESS,
    payload,
  };
};

export const quoteAcceptError = (error) => {
  return {
    type: types.QUOTE_ACCEPT_ERROR,
    error,
  };
};

// ====== USERS ACTION CREATORS ======= //

export const loginWatcher = (payload) => {
  return {
    type: types.LOGIN_WATCHER,
    payload,
  };
};

export const logIn = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};

export const logoutWatcher = () => {
  return {
    type: types.LOGOUT_WATCHER,
  };
};

export const signupWatcher = (payload) => {
  return {
    type: types.SIGNUP_WATCHER,
    payload,
  };
};

export const confirmUser = (payload) => {
  return {
    type: types.CONFIRM_USER,
    payload,
  };
};

export const editProfileWatcher = (payload) => {
  return {
    type: types.EDIT_PROFILE_WATCHER,
    payload,
  };
};

export const updateProfile = (payload) => {
  return {
    type: types.UPDATE_PROFILE,
    payload,
  };
};

export const updatePassword = (payload) => {
  return {
    type: types.UPDATE_PASSWORD,
    payload,
  };
};

// ====== CLEANERS ACTION CREATORS ======= //

export const loadCleaner = (payload) => {
  return {
    type: types.LOAD_CLEANER,
    payload,
  };
};

export const applyCleanerWatcher = (payload) => {
  return {
    type: types.APPLY_CLEANER_WATCHER,
    payload,
  };
};

export const postCleanerProfile = (payload) => {
  return {
    type: types.ADD_CLEANER_PROFILE,
    payload,
  };
};

export const editCleanerWatcher = (payload) => {
  return {
    type: types.EDIT_CLEANER_WATCHER,
    payload,
  };
};

export const updateCleanerProfile = (payload) => {
  return {
    type: types.UPDATE_CLEANER_SUCCESS,
    payload,
  };
};

export const deleteCleanerWatcher = () => {
  return {
    type: types.DELETE_CLEANER_WATCHER,
  };
};

export const loadQuotableOrdersWatcher = () => {
  return {
    type: types.LOAD_QUOTABLE_ORDERS_WATCHER,
  };
};

export const setQuotableOrders = (payload) => {
  return {
    type: types.SET_QUOTABLE_ORDERS,
    payload,
  };
};

export const addQuoteWatcher = ({ orderID, quote }) => {
  return {
    type: types.ADD_QUOTE_WATCHER,
    payload: { orderID, quote },
  };
};

export const postQuote = (payload) => {
  return {
    type: types.POST_QUOTE_SUCCESS,
    payload,
  };
};

export const loadQuotedOrderWatcher = () => {
  return {
    type: types.LOAD_QUOTED_ORDERS_WATCHER,
  };
};

export const setQuotedOrders = (payload) => {
  return {
    type: types.SET_QUOTED_ORDERS,
    payload,
  };
};

export const updateOrderWatcher = ({ orderID, payload }) => {
  return {
    type: types.UPDATE_ORDER_BY_CLEANER_WATCHER,
    payload: { orderID, payload },
  };
};

export const setUpdatedOrder = (payload) => {
  return {
    type: types.UPDATE_ORDER_BY_CLEANER_SUCCESS,
    payload,
  };
};
