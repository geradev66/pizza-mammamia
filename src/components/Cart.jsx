import { pizzaCart } from '../pizzas';
import {useState} from 'react'


const Cart = () => {
    const [cart, setCart] = useState(
        pizzaCart.map((pizza) =>({
            ...pizza,
            cantidad: 1,
        }))
    );

    const aumentar = (id) =>{
        setCart(cart.map((pizza)=>
         pizza.id === id ? {...pizza, cantidad: pizza.cantidad + 1 } : pizza))
    }

    const restar= (id) =>{
        setCart(prevCart => {
            const actualizarCart = prevCart.map((pizza)=>
            pizza.id===id && pizza.cantidad > 0 ? {...pizza,cantidad:pizza.cantidad-1}:pizza
        )
            return actualizarCart.filter((pizza) =>pizza.cantidad > 0)
    })
}

const total = cart.reduce((acc,pizza)=> acc + pizza.price * pizza.cantidad, 0)
    
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
              <td><img src={pizza.img} style={{'width': 100}} className="card-img-top rounded" alt="..."/> {pizza.name}</td>
              <td>${pizza.price}</td>
              <td>
                <button className='btn btn-danger me-2' onClick={() => restar(pizza.id)}>-</button>
                <span>{pizza.cantidad}</span>
                <button className='btn btn-success ms-2 ' onClick={() => aumentar(pizza.id)}>+</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total:${total}</h2>
    </div>
  </>
  )
}

export default Cart