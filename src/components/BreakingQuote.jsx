import React, { useState } from "react";

import useFetch from "../hooks/useFetch";

const BreakingQuote = () => {
  const [counter, setCounter] = useState(1);

  const { datos, loading } = useFetch(counter);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Breaking Quote</h1>
        </div>
      </div>
      <div className="row">
        {loading ? (
          <div className="alert alert-info mt-3 text-center" role="alert">
            Cargando...
          </div>
        ) : (
          <div className="col text-end mt-3">
            <figure>
              <blockquote className="blockquote">
                <p>{datos[0].quote}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">{datos[0].author}</cite>
              </figcaption>
            </figure>
            <button className="btn btn-primary" onClick={increment}>
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreakingQuote;
