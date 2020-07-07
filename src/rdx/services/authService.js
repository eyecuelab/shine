export const loginService = (request) => {
  // console.log('LOGIN REQUEST', request);
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

export const logoutService = (request) => {
  // console.log('LOGOUT REQUEST', request);
  const LOGOUT_API_ENDPOINT = 'https://shoeshine.herokuapp.com/logout';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'WWW-Authenticate': request,
    },
  };
  console.log('PARAMS::', parameters);

  return fetch(LOGOUT_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};
