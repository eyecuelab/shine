import getEnvVars from '../../../environment';

const { apiUrl } = getEnvVars();

export const fetchOrders = async (token) => {
  const response = await fetch(`${apiUrl}/orders`, {
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

export function* postOrder(order, token) {
  const urlLink = `${apiUrl}/orders`;
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

export const publishOrder = async (request, token) => {
  const urlLink = `${apiUrl}/orders/${request.orderID}`;
  const response = await fetch(urlLink, {
    method: 'PATCH',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(request.publishedAt),
  });
  const result = await response.json();
  if (response.ok && response.status === 200) {
    return result;
  } else {
    throw new Error(response.json());
  }
};

export const getOrderById = async (orderID, token) => {
  const urlLink = `${apiUrl}/orders/${orderID}`;
  const response = await fetch(urlLink, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  const result = await response.json();
  if (response.ok && response.status === 200) {
    return result;
  } else {
    throw new Error(response.json());
  }
};

export function* deleteOrder(orderID, token) {
  const urlLink = `${apiUrl}/orders/${orderID}`;
  const response = yield fetch(urlLink, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  });
  if (response.status === 204) {
    return response;
  } else {
    throw new Error(response.json());
  }
}

export const quoteAccept = async (request, orderID, token) => {
  const urlLink = `${apiUrl}/orders/${orderID}`;
  const response = await fetch(urlLink, {
    method: 'PATCH',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(request),
  });
  const result = await response.json();

  if (response.ok && response.status === 200) {
    return result;
  } else {
    throw new Error(response.json());
  }
};

// export { fetchOrders, postOrder, publishOrder, getOrderById, deleteOrder };
