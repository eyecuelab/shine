const fetchOrders = async (token) => {
  const response = await fetch('http://localhost:8080/orders', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchOrders };
