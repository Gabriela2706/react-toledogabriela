import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const existeItem = (id) => {
    let existe = cart.some((items) => items.id === id);
    return existe;
  };
  const agregarAlCarrito = (detalle) => {
    let existe = existeItem(detalle.id);
    if (existe) {
      let nuevoCarro = cart.map((items) => {
        if (items.id === detalle.id) {
          return {
            ...items,
            quantity: items.quantity + detalle.quantity,
          };
        } else {
          return items;
        }
      });
      setCart(nuevoCarro);
    } else {
      setCart([...cart, detalle]);
    }
  };

  const limpiarCarrito = () => {
    setCart([]);
  };

  const eliminarItemPorId = (id) => {
    setCart(cart.filter((items) => items.id !== id));
  };

  const obtenerTotalCarrito = () => {
    let total = cart.reduce((acum, items) => {
      return acum + items.precio * items.quantity;
    }, 0);

    return total;
  };
  const unidadesEnCarrito = () => {
    let total = cart.reduce((acum, items) => {
      return acum + items.quantity;
    }, 0);

    return total;
  };

  let data = {
    agregarAlCarrito,
    cart,
    limpiarCarrito,
    eliminarItemPorId,
    obtenerTotalCarrito,
    unidadesEnCarrito,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
