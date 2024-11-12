import { allergensImgs } from "../../utils/data/allergensImgs";
import Button from "../Button/Button";
import "./Recipe.css";

const Recipe = ({ recipe }) => {
  return (
    <article className="recipe">
      <div className="img">
        <img src={recipe.img} />
      </div>
      <div className="info">
        <h3>{recipe.title}</h3>
        <div>
          <p>Dificultad: {recipe.difficulty}</p>
          <p>⏱ {recipe.time} min</p>
        </div>
      </div>
      <div className="allergens">
        <div>
          {recipe.allergens.map((allergen) => (
            <img
              src={allergensImgs[allergen].src}
              alt={allergensImgs[allergen].alt}
              title={allergen}
              key={allergen}
            />
          ))}
        </div>
        <Button width="auto">Ver Receta</Button>
      </div>
    </article>
  );
};

export default Recipe;
