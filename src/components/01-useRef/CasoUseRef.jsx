import React, { useState } from "react";
import BreakingQuote from "../BreakingQuote";

const CasoUseRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Caso de uso real useRef</h1>
          <hr />
        </div>
      </div>
      {show && <BreakingQuote />}
      <button className="btn btn-info" onClick={() => setShow(!show)}>
        Show | Hide
      </button>
    </div>
  );
};

export default CasoUseRef;
