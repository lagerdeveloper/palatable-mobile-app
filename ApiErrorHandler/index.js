export default (response) => {
  let responseParsed = false;
  let validResponse = false;
  if (response.status >= 200 && response.status < 300) {
    validResponse = true;
  }
  return response.json().then(data => {
    responseParsed = true;
    if (validResponse) {
      return data;
    }
    throw new Error(data.error);
  })
  .catch(error => {
    if (validResponse) {
      return null;
    } else if (responseParsed) {
      throw new Error(error.message);
    }
    throw new Error('Not Authorized');
  });
};
