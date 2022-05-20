import React from "react";

import productos from "../data/productos";
const ShopScreen = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Shop Screen</h1>
          <hr />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div className="col" key={producto.id}>
            <div className="card align-items-center h-100">
              <img
                src={producto.image}
                className="card-img-top img-card"
                alt={producto.title}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text text-end">
                  ${parseFloat(producto.price).toFixed(2)}
                </p>
              </div>
              <div className="align-self-end p-3">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    addCart(producto.id);
                  }}
                >
                  <i
                    className="fa fa-cart-plus fa-2x me-1"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopScreen;
