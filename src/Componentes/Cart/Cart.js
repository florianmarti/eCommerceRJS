import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, removerItem, getTotal } = useContext(CartContext);

  const total = getTotal();

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((prod) => {
        return (
          <div key={prod.id}>
            <h1>{prod.nombre}</h1>
            <h2>$ {prod.precio}</h2>
            <h2>cantidad: {prod.cantidad}</h2>
            <h2>subtotal: {prod.precio * prod.cantidad}</h2>
            <button onClick={() => removerItem(prod.id)}>
              Eliminar Productos
            </button>
          </div>
        );
      })}
      <h1>Total: ${total}</h1>
    </div>
  );
};
export default Cart;
