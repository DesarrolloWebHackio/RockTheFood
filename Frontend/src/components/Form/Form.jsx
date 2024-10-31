import { createContext } from "react";
import "./Form.css";

export const FormContext = createContext();

const Form = ({ children, handleSubmit, submit, register }) => {
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <FormContext.Provider value={{ register }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
