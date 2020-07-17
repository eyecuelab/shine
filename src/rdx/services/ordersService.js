// import { put } from 'redux-saga/effects';

const fetchOrders = async (token) => {
  console.log('HIT API');
  const response = await fetch('http://127.0.0.1:8080/orders', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  const result = await response.json();

  if (response.status >= 400) {
    throw new Error(result.errors);
  } else {
    return result.data;
  }
};

function* postOrder(order, token) {
  console.log('ORDER: ', order);
  const urlLink = 'http://127.0.0.1:8080/orders';
  const response = yield fetch(urlLink, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(order),
  });
  if (response.ok && response.status === 200) {
    return response;
  } else {
    throw new Error(response.json());
  }
}

function* publishOrder(request, token) {
  console.log('R: ', request);
}

export { fetchOrders, postOrder, publishOrder };
