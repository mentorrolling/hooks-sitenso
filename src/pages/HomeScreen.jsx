import React, { useContext } from "react";
import UserContext from "../context/Context";
import useForm from "../hooks/useForm";

const HomeScreen = () => {
  const { usuario, setUsuario } = useContext(UserContext);
  const [{ userInput }, handleInputChange, reset] = useForm({
    userInput: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuario({ ...usuario, username: userInput });
    reset();
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Home Screen</h1>
          <hr />
          <h3>Bienvenido {usuario.username}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              name="userInput"
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Ingrese el nuevo nombre de usuario"
            />

            <button className="btn btn-primary mt-3">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
