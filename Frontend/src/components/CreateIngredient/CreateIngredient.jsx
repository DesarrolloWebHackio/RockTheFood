import { useForm } from "react-hook-form";
import FieldForm from "../FieldForm/FieldForm";
import Form from "../Form/Form";
import "./CreateIngredient.css";
import AlertForm from "../AlertForm/AlertForm";
import { useContext, useEffect, useRef, useState } from "react";
import {
  createIngredient,
  getIngredients,
} from "../../reducers/ingredients/ingredients.actions";
import { handleImage } from "../../utils/functions/handleImage";
import { IngredientsContext } from "../../providers/IngredientsProvider";
import Button from "../Button/Button";
import { toggleAllergens } from "../../utils/functions/toggleAllergens";
import { allergensImgs } from "../../utils/data/allergensImgs";

const allergensSelected = [];

const CreateIngredient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();

  const [image, setImage] = useState();
  const [openned, setOpenned] = useState(false);
  const imageRef = useRef();

  const { state, dispatch } = useContext(IngredientsContext);
  const { ingredients } = state;

  useEffect(() => {
    getIngredients(dispatch);
  }, []);

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        submit={(data) =>
          createIngredient(
            data,
            image,
            setError,
            imageRef,
            reset,
            setImage,
            dispatch,
            setOpenned,
            allergensSelected
          )
        }
        register={register}
      >
        <Button width="auto" type="button" onClick={() => setOpenned(true)}>
          Ver ingredientes
        </Button>
        <h2>Nuevo Ingrediente</h2>
        <p>Añade un nuevo ingrediente a la base de datos</p>
        <AlertForm errors={errors} />
        <FieldForm
          label="Nombre del ingrediente"
          ph="Ej: Harina"
          registerName="name"
          validations={{
            required: {
              value: true,
              message: "El nombre del ingrediente es requerido",
            },
          }}
        />
        <div className="allergens">
          <label>Elige los alérgenos</label>
          <div>
            {Object.keys(allergensImgs).map((allergen) => (
              <div key={allergen}>
                <input
                  type="checkbox"
                  onClick={(e) =>
                    toggleAllergens(e, allergen, allergensSelected)
                  }
                />
                <p>{allergen}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="div_image">
          <label htmlFor="image" className="image">
            Subir imagen
            <img src="/icons/upload.png" alt="subir imagen del ingrediente" />
          </label>
          <input
            id="image"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => handleImage(e, setImage)}
            ref={imageRef}
          />
          {image && <img src={image} alt="contenido subido por el usuario" />}
        </div>
      </Form>

      {openned && (
        <div className="modal" onClick={(e) => setOpenned(false)}>
          <div>
            {ingredients.map((ingredient) => (
              <div key={ingredient._id}>
                <img src={ingredient.logo} />
                <p>{ingredient.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CreateIngredient;
