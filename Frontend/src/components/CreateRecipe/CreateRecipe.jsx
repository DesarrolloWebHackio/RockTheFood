import { useForm } from "react-hook-form";
import FieldForm from "../FieldForm/FieldForm";
import Form from "../Form/Form";
import "./CreateRecipe.css";
import { allergens } from "../../utils/data/allergens";

const CreateRecipe = () => {

    const { register, handleSubmit } = useForm();

  return (
    <Form
      handleSubmit={handleSubmit}
      submit={(data) => {
        console.log(data);
      }}
      register={register}
    >
      <h2>Nueva Receta</h2>
      <p>Crea una nueva receta</p>
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
              <input type="checkbox" />
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

export default CreateRecipe;
