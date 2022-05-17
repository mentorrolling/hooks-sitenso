import React, { useReducer } from "react";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Estudiar React",
    done: false,
  },
];

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>TodoApp (1)</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">todos</div>
        <div className="col">agregar todos</div>
      </div>
    </div>
  );
};

export default TodoApp;
