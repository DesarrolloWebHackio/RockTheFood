import { Link } from "react-router-dom";
import Button from "../Button/Button";
import FieldForm from "../FieldForm/FieldForm";
import "./Register.css";
import Form from "../Form/Form";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Form handleSubmit={handleSubmit} submit={submit} register={register}>
      <h2>Registrarse</h2>
      <p>Crea una cuenta nueva</p>
      <FieldForm
        label="Nombre"
        ph="Tu nombre"
        registerName="name"
      />
      <FieldForm
        label="Correo electrónico"
        ph="tu@email.com"
        type="email"
        registerName="email"
      />
      <FieldForm
        label="Contraseña"
        ph="*********"
        type="password"
        registerName="password"
      />
      <Button width="90%">Registrarse</Button>
      <Link to="/login">¿Ya tienes cuenta? Inicia sesión</Link>
    </Form>
  );
};

export default Register;
