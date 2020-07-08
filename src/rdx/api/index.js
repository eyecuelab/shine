import { put } from 'redux-saga/effects';

const fetchOrders = async (token) => {
  console.log(token);
  const response = await fetch('http://127.0.0.1:8080/orders', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  const result = await response.json();
  console.log('API CALL: ', result.data);

  if (response.statusCode >= 400) {
    throw new Error(result.data.errors);
  } else {
    return result.data;
  }
};

const postOrder = (token) => {
  const POST_ORDER_ENDPOINT = 'http://127.0.0.1:8080/orders';
  const parameters = {
    method: 'POST',
    headers: {
      Authorization: token,
    },
  };

  return fetch(POST_ORDER_ENDPOINT, parameters).then((response) => {
    if (response.ok && response.status === 200) {
      return response;
    } else {
      throw new Error(response.json());
    }
  });
};

export { fetchOrders, postOrder };
