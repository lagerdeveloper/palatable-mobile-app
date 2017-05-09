export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case 'FETCH_FEATURED_RECIPES':
      return Object.assign({}, state, { isFetching: true });
    case 'FETCH_FEATURED_RECIPES_SUCCEEDED':
      return Object.assign({}, state, {
        isFetching: false,
        featuredRecipes: action.featuredRecipes,
      });
    case 'FETCH_FEATURED_RECIPES_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return Object.assign({}, state);
  }
};
