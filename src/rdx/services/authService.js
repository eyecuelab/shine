import getEnvVars from '../../../environment';

const { apiUrl } = getEnvVars();

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = `${apiUrl}/login`;

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

export const getProfileService = async (token) => {
  const response = await fetch(`${apiUrl}/profile`, {
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

export const logoutUserService = (request) => {
  const LOGOUT_API_ENDPOINT = `${apiUrl}/logout`;

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
  const SIGNUP_API_ENDPOINT = `${apiUrl}/signup`;

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

export const confirmUserService = (code) => {
  const CONFIRM_API_ENDPOINT = `${apiUrl}/signup/confirm`;

  const parameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(code),
  };

  return fetch(CONFIRM_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};

export const editProfileService = (request, token) => {
  const PROFILE_API_ENDPOINT = `${apiUrl}/profile`;

  const parameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(request),
  };

  return fetch(PROFILE_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};
