export const INITIAL_RECIPES_STATE = {
  recipes: [],
  loading: false,
  error: null,
};

export const recipesReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    case "GET_RECIPES":
      return {
        ...state,
        error: null,
        loading: false,
        recipes: [...action.payload],
      };
    default:
      return state;
  }
};
