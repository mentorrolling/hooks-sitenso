import React, { useContext } from "react";
import UserContext from "../context/Context";
import useForm from "../hooks/useForm";

const HomeScreen = () => {
  const { usuario, setUsuario } = useContext(UserContext);

  const [{ inputValue }, handleInputChange, reset] = useForm({
    inputValue: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuario({ ...usuario, username: inputValue });
    reset();
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Home Screen</h1>
          <hr />
          <h3>Hola {usuario.username} bienvenido!!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="inputValue"
              placeholder="Ingrese el nuevo nombre de usuario"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary mt-3">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
