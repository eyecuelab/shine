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

export const expiresIn = (date) => {
  const timeleft = (date) => {
    const countDownDate = (date) => {
      return new Date(date).getTime();
    };
    const now = new Date().getTime();
    return countDownDate(date) - now;
  };
  const hours = Math.floor(timeleft(date) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft(date) % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 0) {
    return hours + 'hr';
  }
  return minutes + 'min';
};
