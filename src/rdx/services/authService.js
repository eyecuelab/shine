export const loginUserService = (request) => {
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

export const logoutUserService = (request) => {
  const LOGOUT_API_ENDPOINT = 'https://shoeshine.herokuapp.com/logout';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: request,
    },
  };

  return fetch(LOGOUT_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};

export const signUpUserService = (request) => {
  // console.log('REQUEST: ', request);
  const SIGNUP_API_ENDPOINT = 'https://shoeshine.herokuapp.com/signup';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  };

  return fetch(SIGNUP_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};
