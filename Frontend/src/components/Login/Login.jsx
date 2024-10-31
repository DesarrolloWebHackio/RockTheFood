import { Link } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import FieldForm from "../FieldForm/FieldForm";
import Button from "../Button/Button";
import Form from "../Form/Form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Form handleSubmit={handleSubmit} submit={submit} register={register}>
      <h2>Iniciar Sesión</h2>
      <p>Ingresa a tu cuenta</p>
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
      <Button width="90%">Iniciar sesión</Button>
      <Link to="/register">¿No tienes cuenta? Regístrate</Link>
    </Form>
  );
};

export default Login;
