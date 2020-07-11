export const loginUserService = (request) => {
  // const LOGIN_API_ENDPOINT = 'https://shoeshine.herokuapp.com/login';
  //const LOGIN_API_ENDPOINT = 'http://127.0.0.1:8080/login';
  const LOGIN_API_ENDPOINT = 'http://127.0.0.1:8080/login';

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
  // const LOGOUT_API_ENDPOINT = 'https://shoeshine.herokuapp.com/logout';
  const LOGOUT_API_ENDPOINT = 'http://127.0.0.1:8080/logout';

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
  // const SIGNUP_API_ENDPOINT = 'https://shoeshine.herokuapp.com/signup';
  const SIGNUP_API_ENDPOINT = 'http://127.0.0.1:8080/signup';

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

export const editProfileService = (request) => {
  console.log('REQUEST', request);
  // const EDIP_PROFILE_API_ENDPOINT = 'https://shoeshine.herokuapp.com/profile';
  const EDIP_PROFILE_API_ENDPOINT = 'http://127.0.0.1:8080/profile';

  const parameters = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: request.token,
    },
    body: JSON.stringify(request.profile),
  };

  return fetch(EDIP_PROFILE_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};
