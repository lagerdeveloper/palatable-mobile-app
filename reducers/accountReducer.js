import { Map } from 'immutable';

export default (prevState = Map({ isFetching: false, signedIn: false, signedUp: false }), action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return Map({ isFetching: true });
    case 'SIGN_UP_SUCCEEDED':
      return Map({ isFetching: false, signedUp: true });
    case 'SIGN_UP_FAILED':
      return Map({ isFetching: false, signedUp: false, error: action.error });
    case 'SIGN_IN':
      return prevState.mergeDeep({ isFetching: true, error: undefined });
    case 'SIGN_IN_SUCCEEDED':
      return Map({ isFetching: false, signedUp: true, signedIn: true, session: action.session });
    case 'SIGN_IN_FAILED':
      return Map({ isFetching: false, signedUp: true, error: action.error });
    case 'SIGN_OUT':
      return prevState.mergeDeep({ isFetching: true });
    case 'SIGN_OUT_SUCCESS':
      return Map({ isFetching: false, signedIn: false, session: undefined });
    case 'SIGN_OUT_FAILED':
      return prevState.mergeDeep({ isFetching: false, error: action.error });
    case 'DESTROY_ACCOUNT':
      return prevState.merge({ isFetching: true, error: undefined })
    case 'DESTROY_ACCOUNT_SUCCESS':
      return Map({
        isFetching: false,
        signedIn: false,
        signedUp: false,
        session: undefined,
      });
    case 'DESTROY_ACCOUNT_FAILED':
      return prevState.mergeDeep({ isFetching: false, error: action.error });
    case 'ADD_PROFILE_IMAGE_SUCCESS':
      return prevState.mergeDeep({ isFetching: false });
    case 'ADD_PROFILE_IMAGE_FAILED':
      return prevState.mergeDeep({ isFetching: false, error: action.error });
    case 'CLEAR_ERRORS':
      return prevState.mergeDeep({ error: undefined });
    default:
      return prevState;
  }
};
