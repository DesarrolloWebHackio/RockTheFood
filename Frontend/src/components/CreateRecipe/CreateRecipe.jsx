import { useForm } from "react-hook-form";
import FieldForm from "../FieldForm/FieldForm";
import Form from "../Form/Form";
import "./CreateRecipe.css";
import React, { useContext, useRef, useState } from "react";
import UploadImage from "../UploadImage/UploadImage";
import { createRecipe } from "../../reducers/recipes/recipes.actions";
import { RecipesContext } from "../../providers/RecipesProvider";
import { IngredientsContext } from "../../providers/IngredientsProvider";
import { toggleCheckboxFamily } from "../../utils/functions/toggleAllergens";

const ingredientsSelected = [];

const CreateRecipe = () => {
  const [image, setImage] = useState();
  const imageRef = useRef();
  const { register, handleSubmit } = useForm();
  const [step, setStep] = useState(1);
  const { dispatch, state } = useContext(RecipesContext);
  const { state: ingredientsState } = useContext(IngredientsContext);
  const [ingredientsAndQuantity, setIngredientsAndQuantity] = useState([]);

  const { ingredients } = ingredientsState;

  return (
    <Form
      handleSubmit={handleSubmit}
      submit={(data) => {
        if (!step) {
          const formData = new FormData();
          formData.append("title", data.title);
          formData.append("difficulty", data.difficulty);
          formData.append("time", data.time);
          formData.append("img", imageRef.current.files[0]);
          createRecipe(formData, dispatch, setStep);
        }
        if (step) {
          setStep(step + 1);
        }
        const arrayDuplicates = [...ingredientsAndQuantity];
        console.log(arrayDuplicates);
        for (let i = arrayDuplicates.length - 1; i >= 0; i--) {
          let cont = 0;
          console.log("I: ", arrayDuplicates[i]);
          for (let j = i - 1; j >= 0; j--) {
            console.log("J: ", arrayDuplicates[j]);

            if (
              arrayDuplicates[i].ingredient === arrayDuplicates[j].ingredient
            ) {
              arrayDuplicates.splice(j, 1);
              j++;
              cont++;
            }
          }
          i = i - cont;
        }
        console.log(arrayDuplicates);
      }}
      register={register}
      buttonText={step < 2 ? "Siguiente" : "Enviar"}
    >
      <h2>Nueva Receta</h2>
      <p>Crea una nueva receta</p>
      {!step && (
        <>
          <FieldForm
            label="Nombre de la receta"
            ph="Ej: Macedonia"
            registerName="title"
          />
          <div className="info_recipe_time_difficulty">
            <div className="select_fieldform">
              <label>Escoge la dificultad</label>
              <select
                {...register("difficulty", {
                  required: { value: true, message: "Escoge una dificultad" },
                })}
              >
                <option></option>
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
              </select>
            </div>
            <FieldForm
              label="Escoge una duración"
              ph="5"
              registerName="time"
              type="number"
            />
          </div>
          <UploadImage image={image} setImage={setImage} imageRef={imageRef} />
          <input id="image" type="file" style={{ display: "none" }} />
        </>
      )}
      {step === 1 && (
        <>
          <div className="ingredient_select">
            <label>Elige los ingredientes</label>
            <div>
              {ingredients.map((ingredient) => (
                <div key={ingredient._id}>
                  <input
                    type="checkbox"
                    id={ingredient._id}
                    onChange={(e) => {
                      toggleCheckboxFamily(e, ingredient, ingredientsSelected);
                    }}
                  />
                  <label htmlFor={ingredient._id}>
                    <img src={ingredient.logo} alt={ingredient.name} />
                    <p>{ingredient.name}</p>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="ingredients_selected">
            <label>Elige las cantidades</label>
            <div>
              {ingredientsSelected.map((ingredient) => (
                <div key={ingredient._id}>
                  <div>
                    <img src={ingredient.logo} alt={ingredient.name} />
                    <h3>{ingredient.name}</h3>
                  </div>
                  <input
                    placeholder="L / gr / U"
                    required
                    onBlur={(e) =>
                      setIngredientsAndQuantity([
                        ...ingredientsAndQuantity,
                        {
                          ingredient: ingredient._id,
                          quantity: e.target.value,
                        },
                      ])
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </Form>
  );
};

export default CreateRecipe;
