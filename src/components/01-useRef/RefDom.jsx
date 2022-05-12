import React, { useRef } from "react";

const RefDom = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Ejemplo de useRef en el DOM</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" ref={inputRef} />
          <button className="btn btn-primary mt-3" onClick={handleClick}>
            Focus
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefDom;
