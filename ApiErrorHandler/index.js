export default (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(JSON.parse(response._bodyText).error);
  throw error;
};
