export const applyCleanerService = (request, token) => {
  const APPLY_CLEANER_ENDPOINT = 'http://127.0.0.1:8080/cleaners';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(request),
  };

  return fetch(APPLY_CLEANER_ENDPOINT, parameters).then((response) => {
    return response;
  });
};

export const editCleanerService = (request, userID, token) => {
  const UPDATE_CLEANER_ENDPOINT = `http://127.0.0.1:8080/cleaners/${userID}`;
  const parameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(request),
  };

  return fetch(UPDATE_CLEANER_ENDPOINT, parameters).then((response) => {
    return response;
  });
};

export const deleteCleanerService = (userID, token) => {
  const DELETE_CLEANER_ENDPOINT = `http://127.0.0.1:8080/cleaners/${userID}`;
  const parameters = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  return fetch(DELETE_CLEANER_ENDPOINT, parameters).then((response) => {
    return response;
  });
};
