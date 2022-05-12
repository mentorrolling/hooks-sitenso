import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

const MemoHook = () => {
  const { counter, increment } = useCounter(2000);

  const [show, setShow] = useState(false);

  //   const procesoPesado = (iterador) => {
  //     for (let index = 0; index < iterador; index++) {
  //       console.log("Ahí vamos...");
  //     }

  //     return `${iterador} iteraciones realizadas`;
  //   };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>MemoHook</h1>
          <h3>
            Contador: <small>{counter}</small>
          </h3>
          <hr />
          <p>{procesoPesado(counter)}</p>
          <button className="btn btn-primary" onClick={increment}>
            +1
          </button>
          <button
            className="btn btn-outline-primary ms-3"
            onClick={() => setShow(!show)}
          >
            Show | Hide {JSON.stringify(show)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoHook;
