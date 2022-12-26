import { createContext, useState } from "react";
export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!estaEnCarrito(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
  };
  const estaEnCarrito = (id) => {
    return cart.some((product) => product.id === id);
  };

  const getCantidad = () => {
    let acc = 0;

    cart.forEach((prod) => {
      acc += prod.cantidad;
    });
    return acc;
  };
  return (
    <CartContext.Provider value={{ cart, addItem, estaEnCarrito, getCantidad }}>
      {children}
    </CartContext.Provider>
  );
};
