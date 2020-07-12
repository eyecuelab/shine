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

export const editCleanerService = (request) => {
  const payload = request[0];
  const url = request[1];
  const token = request[2];
  console.log('Request', payload);

  const parameters = {
    method: 'PATCH',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(payload),
  };

  return fetch(url, parameters).then((response) => {
    return response;
  });
};

export const deleteCleanerService = (url, token) => {
  const parameters = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  return fetch(url, parameters).then((response) => {
    return response;
  });
};
