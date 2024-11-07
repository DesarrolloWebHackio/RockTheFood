import { useForm } from "react-hook-form";
import FieldForm from "../FieldForm/FieldForm";
import Form from "../Form/Form";
import "./CreateIngredient.css";
import { allergens } from "../../utils/data/allergens";
import { useState } from "react";

const CreateIngredient = () => {
  const { register, handleSubmit } = useForm();
  const [allergensSelected, setAllergensSelected] = useState([]);

  const toggleAllergens = (e, allergen) => {
    if (e.target.checked) {
        setAllergensSelected([...allergensSelected, allergen]);
    } else {
      const allergensTemp = [...allergensSelected];
      allergensTemp.splice(allergensSelected.indexOf(allergen), 1);
      setAllergensSelected(allergensTemp);
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      submit={(data) => {
        console.log(data);
      }}
      register={register}
    >
      <h2>Nuevo Ingrediente</h2>
      <p>Añade un nuevo ingrediente a la base de datos</p>
      <FieldForm
        label="Nombre del ingrediente"
        ph="Ej: Harina"
        registerName="name"
      />
      <div className="allergens">
        <label>Elige los alérgenos</label>
        <div>
          {allergens.map((allergen) => (
            <div key={allergen}>
              <input
                type="checkbox"
                onClick={(e) => toggleAllergens(e, allergen)}
              />
              <p>{allergen}</p>
            </div>
          ))}
        </div>
      </div>
      <label htmlFor="image" className="image">
        Subir imagen
      </label>
      <input id="image" type="file" style={{ display: "none" }} />
    </Form>
  );
};

export default CreateIngredient;
