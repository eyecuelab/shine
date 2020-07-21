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

export const editCleanerService = (request, cleanerID, token) => {
  const url = `http://127.0.0.1:8080/cleaners/${cleanerID}`;
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

export const deleteCleanerService = (cleanerID, token) => {
  const url = `http://127.0.0.1:8080/cleaners/${cleanerID}`;
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

export const loadQuotableOrdersService = (cleanerID, token) => {
  const url = `http://127.0.0.1:8080/cleaners/${cleanerID}/orders?quotable=true`;
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

export const postQuoteService = (request, cleanerID, token) => {
  const url = `http://127.0.0.1:8080/cleaners/${cleanerID}/orders/${request.orderID}/quote`;
  const parameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(request.quote),
  };

  return fetch(url, parameters).then((response) => {
    return response;
  });
};

export const loadQuotedOrdersService = (cleanerID, token) => {
  const url = `http://127.0.0.1:8080/cleaners/${cleanerID}/orders?quoted=true`;
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
