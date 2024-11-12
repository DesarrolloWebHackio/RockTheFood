import { useContext, useEffect } from "react";
import "./Home.css";
import { UsersContext } from "../../providers/usersProvider";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { RecipesContext } from "../../providers/RecipesProvider";
import { getRecipes } from "../../reducers/recipes/recipes.actions";
import Recipe from "../../components/Recipe/Recipe";

const Home = () => {
  const { state } = useContext(UsersContext);
  const { user } = state;
  const { state: recipesState, dispatch } = useContext(RecipesContext);

  const { recipes } = recipesState;
  console.log(recipes);

  useEffect(() => {
    getRecipes(dispatch);
  }, []);

  return (
    <section className="home">
      {user?.rol === "admin" && (
        <Link to="/admin-dashboard" className="link-admin">
          <Button>Panel de administración</Button>
        </Link>
      )}
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe._id} />
      ))}
    </section>
  );
};

export default Home;
