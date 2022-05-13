import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const incrementar = () => {
  //     setCounter(counter + 1);
  //   };

  const incrementar = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Contador : {counter}</h1>

          <ShowIncrement incrementar={incrementar} />
          {/* <button className="btn btn-primary" onClick={incrementar}>
            Incrementar
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CallbackHook;
