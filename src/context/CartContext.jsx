import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (detalle) => {
    setCart([...cart, detalle]);
  };

  const limpiarCarrito = () => {
    setCart([]);
  };
  let data = { agregarAlCarrito, cart, limpiarCarrito };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
