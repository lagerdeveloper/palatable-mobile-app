export default (response) => {
  let responseParsed = false;
  return response.json().then(data => {
    responseParsed = true;
    if (response.status >= 200 && response.status < 300) {
      return data;
    }
    throw new Error(data.error);
  })
  .catch(error => {
    if (responseParsed) {
      throw new Error(error.message);
    }
    throw new Error('Error with API Handler');
  });
};
