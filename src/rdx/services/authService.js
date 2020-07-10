export const loginUserService = (request) => {
  // const LOGIN_API_ENDPOINT = 'https://shoeshine.herokuapp.com/login';
  const LOGIN_API_ENDPOINT = 'http://127.0.0.1:8080/login';

  const parameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
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
      Accept: 'application/json',
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
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  };

  return fetch(SIGNUP_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};

export const editProfileService = (request) => {
  const PROFILE_API_ENDPOINT = 'http://127.0.0.1:8080/profile';

  const parameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: request.token,
    },
    body: JSON.stringify(request.profile),
  };

  return fetch(PROFILE_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};

// export const getProfileService = (request) => {
//   console.log('GET REQUEST', request);
//   const PROFILE_API_ENDPOINT = 'http://127.0.0.1:8080/profile';

//   const parameters = {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: request,
//     },
//   };

//   return fetch(PROFILE_API_ENDPOINT, parameters).then((response) => {
//     return response;
//   });
// };
