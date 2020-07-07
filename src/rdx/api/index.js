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

  if (response.statusCode > 400) {
    throw new Error(result.data.errors);
  } else {
    return result.data;
  }
};

export { fetchOrders };
