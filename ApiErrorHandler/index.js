export default (response) => {
  return response.json().then(data => {
    if (response.status >= 200 && response.status < 300) {
      return data;
    }
    throw new Error(data.error);
  })
  .catch(error => {
    if (response.status >= 200 && response.status < 300) {
      return;
    }
    throw new Error('Error with API Handler');
  });
};
