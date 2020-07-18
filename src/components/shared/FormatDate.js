// export const expireDateFormatiing =
//     '0' +
//     (expireDate.getMonth() + 1) +
//     '-' +
//     expireDate.getDate() +
//     '-' +
//     expireDate.getFullYear() +
//     ' ' +
//     '0' +
//     expireDate.getHours() +
//     ':' +
//     expireDate.getMinutes() +
//     ':00';

export const formatDateTime = (date) => {
  const theDate = new Date(date);
  return theDate.toLocaleTimeString('en-us', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

export const formatDate = (date) => {
  const theDate = new Date(date);
  return theDate.toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};
