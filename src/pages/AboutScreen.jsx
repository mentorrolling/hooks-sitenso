import React, { useContext } from "react";

import UserContext from "../context/Context";

const AboutScreen = () => {
  const { usuario } = useContext(UserContext);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>About Screen</h1>
          <hr />
          <h3>
            Hola {usuario.username} gracias por visitarnos, te contaremos más
            sobre esta página
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
