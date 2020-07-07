export const loginService = (request) => {
  const LOGIN_API_ENDPOINT = 'http://localhost:8080/login';
  // console.log()
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then((response) => {
      // console.log('R::', response);
      if (response.ok && response.status === 200) {
        return response.json();
      }
    })
    .then((json) => {
      // console.log('J::', json);
      return json;
    });
};
