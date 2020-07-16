export const applyCleanerService = (request, token) => {
  const url = 'http://127.0.0.1:8080/cleaners';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(request),
  };

  return fetch(url, parameters).then((response) => {
    return response;
  });
};

export const editCleanerService = (request, userID, token) => {
  const url = `http://127.0.0.1:8080/cleaners/${userID}`;
  const parameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(request),
  };

  return fetch(url, parameters).then((response) => {
    return response;
  });
};

export const deleteCleanerService = (userID, token) => {
  const url = `http://127.0.0.1:8080/cleaners/${userID}`;
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

export const loadQuotableOrdersService = (userID, token) => {
  const url = `http://127.0.0.1:8080/cleaners/${userID}/orders?quotable=true`;
  const parameters = {
    method: 'GET',
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
