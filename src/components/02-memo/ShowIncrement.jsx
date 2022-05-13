import React from "react";

const ShowIncrement = React.memo(({ incrementar }) => {
  console.log("Me volví a llamar :(");
  return (
    <button className="btn btn-primary" onClick={incrementar}>
      Incrementar
    </button>
  );
});

export default ShowIncrement;
