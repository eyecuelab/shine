// import { put } from 'redux-saga/effects';

const fetchOrders = async (token) => {
  const urlLink = 'http://127.0.0.1:8080/orders';
  // const urlLink = 'https://shoeshine.herokuapp.com/orders';

  const response = await fetch(urlLink, {
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

function* postOrder(order, token) {
  // console.log(token);
  // console.log(JSON.stringify(order));
  const urlLink = 'http://127.0.0.1:8080/orders';
  // const urlLink = 'https://shoeshine.herokuapp.com/orders';

  const response = yield fetch(urlLink, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(order),
  });
  console.log({ response });
  console.log(response.status);
  if (response.ok && response.status === 200) {
    return response;
  } else {
    throw new Error(response.json());
  }
}

export { fetchOrders, postOrder };
