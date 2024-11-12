import { API } from "../../utils/API/API";

export const getRecipes = async (dispatch) => {
  dispatch({ type: "LOADING" });

  const { error, response } = await API({ endpoint: "/recipes" });

  if (error) {
    dispatch({ type: "ERROR", payload: error });
  } else {
    dispatch({ type: "GET_RECIPES", payload: response });
  }
};
