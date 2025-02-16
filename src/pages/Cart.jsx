import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  // Aquí extraemos directamente el valor del contexto
  const { cart, aumentar, restar, total } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Pizza</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pizza) => (
              <tr key={pizza.id}>
                <td>
                  <img src={pizza.img} style={{ width: 100 }} className="card-img-top rounded" alt="..." />{" "}
                  {pizza.name}
                </td>
                <td>${pizza.price}</td>
                <td>
                  <button className="btn btn-danger me-2" onClick={() => restar(pizza.id)}>
                    -
                  </button>
                  <span>{pizza.cantidad}</span>
                  <button className="btn btn-success ms-2" onClick={() => aumentar(pizza.id)}>
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Total: ${total}</h2>
      </div>
    </>
  );
};

export default Cart;
