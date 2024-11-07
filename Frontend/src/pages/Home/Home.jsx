import { useContext } from "react";
import "./Home.css";
import { UsersContext } from "../../providers/usersProvider";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Home = () => {
  const { state } = useContext(UsersContext);
  const { user } = state;

  return (
    <section className="home">
      {user?.rol === "admin" && (
        <Link to="/admin-dashboard" className="link-admin">
          <Button>Panel de administración</Button>
        </Link>
      )}
    </section>
  );
};

export default Home;
