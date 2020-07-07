export const loginService = (request) => {
  const LOGIN_API_ENDPOINT = 'https://shoeshine.herokuapp.com/login';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  };

  return fetch(LOGIN_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};

// return fetch(LOGIN_API_ENDPOINT, parameters)
// .then((response) => {
//   console.log('RESPONSE::', response);
//   return response.json();
//   // if (response.ok && response.status === 200) {
//   //   return response.json();
//   // } else {
//   //   return false;
//   // }
// })
// .then((json) => {
//   console.log('JSON::', json);
//   return json;
// });
// };
