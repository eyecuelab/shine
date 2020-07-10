export const editProfileService = (request) => {
  console.log('PATCH REQUEST', request);
  // const EDIT_PROFILE_API_ENDPOINT = 'https://shoeshine.herokuapp.com/profile';
  const EDIT_PROFILE_API_ENDPOINT = 'http://192.168.1.14:8080/profile';

  const parameters = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: request.token,
    },
    body: JSON.stringify(request.profile),
  };

  return fetch(EDIT_PROFILE_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};

export const getProfileService = (request) => {
  console.log('GET REQUEST', request);
  const EDIT_PROFILE_API_ENDPOINT = 'http://192.168.1.14:8080/profile';

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: request.token,
    },
  };

  return fetch(EDIT_PROFILE_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};
