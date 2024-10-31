import { useContext } from "react";
import "./FieldForm.css";
import { FormContext } from "../Form/Form";

const FieldForm = ({ label, type = "text", ph = "", registerName }) => {
  const { register } = useContext(FormContext);

  return (
    <div className="fieldform">
      <label>{label}</label>
      <input placeholder={ph} type={type} {...register(registerName)} />
    </div>
  );
};

export default FieldForm;
