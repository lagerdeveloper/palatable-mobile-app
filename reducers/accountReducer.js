export default (state = { isFetching: false, signedIn: false, signedUp: false }, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return Object.assign({}, state, { isFetching: true });
    case 'SIGN_UP_SUCCEEDED':
      return Object.assign({}, state, { isFetching: false, signedUp: true });
    case 'SIGN_UP_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
        signedUp: false,
        error: action.error,
      });
    case 'SIGN_IN':
      return Object.assign({}, state, { isFetching: true });
    case 'SIGN_IN_SUCCEEDED':
      return Object.assign({}, state, {
        isFetching: false,
        signedIn: true,
        session: action.session,
      });
    case 'SIGN_IN_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case 'SIGN_OUT':
      return Object.assign({}, state, { isFetching: true });
    case 'SIGN_OUT_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        signedIn: false,
        session: undefined,
      });
    case 'SIGN_OUT_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case 'DESTROY_ACCOUNT':
      return Object.assign({}, state, { isFetching: true });
    case 'DESTROY_ACCOUNT_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        signedIn: false,
        signedUp: false,
        session: undefined,
      });
    case 'DESTROY_ACCOUNT_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case 'ADD_PROFILE_IMAGE_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
      });
    case 'ADD_PROFILE_IMAGE_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return Object.assign({}, state);
  }
};
