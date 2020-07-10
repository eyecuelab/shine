export const applyCleanerService = (request, token) => {
  const APPLY_CLEANER_ENDPOINT = 'http://127.0.0.1:8080/cleaners';
  // const APPLY_CLEANER_ENDPOINT = 'http://192.168.1.14:8080/cleaners';

  // console.log('REQUEST', request);
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
