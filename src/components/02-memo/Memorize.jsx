import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>
            Contador: <Small value={counter} />
          </h1>
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

export default Memorize;
