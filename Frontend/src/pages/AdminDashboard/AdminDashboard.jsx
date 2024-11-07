import { useForm } from "react-hook-form";
import FieldForm from "../../components/FieldForm/FieldForm";
import Form from "../../components/Form/Form";
import { allergens } from "../../utils/data/allergens";
import "./AdminDashboard.css";
import { useState } from "react";
import CreateIngredient from "../../components/CreateIngredient/CreateIngredient";
import CreateRecipe from "../../components/CreateRecipe/CreateRecipe";

const AdminDashboard = () => {
  const [showFormIngrendients, setShowFormIngrendients] = useState(true);

  return (
    <section className="admin-dashboard">
      <div>
        <h1>Panel de Administración</h1>
        <p>Gestiona ingredientes, recetas y más</p>
        <div className="toggle">
          <button
            className={showFormIngrendients ? "active" : ""}
            onClick={() => setShowFormIngrendients(true)}
          >
            Ingredientes
          </button>
          <button
            className={!showFormIngrendients ? "active" : ""}
            onClick={() => setShowFormIngrendients(false)}
          >
            Recetas
          </button>
        </div>
        {showFormIngrendients ? (
          <CreateIngredient />
        ) : (
          <CreateRecipe/>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
