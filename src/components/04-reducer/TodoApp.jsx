import React, { useEffect, useReducer } from "react";
import useForm from "../../hooks/useForm";
import { todoReducer } from "./todoReducer";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: "Estudiar React",
//     done: false,
//   },
// ];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  const borrarTodo = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>TodoApp (1)</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          {todos.map((todo, index) => (
            <div className="card mb-3" key={todo.id}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <p className="m-0">
                  {index + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => borrarTodo(todo.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-5">
          <h3>Agregar TODO</h3>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Ingresa la tarea..."
              name="description"
              value={description}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <div className="d-grid mt-3">
              <button className="btn btn-outline-primary">Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
