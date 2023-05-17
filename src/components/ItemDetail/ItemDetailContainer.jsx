import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { stockProductos } from "../../productsMock";
import { CartContext } from "../../context/CartContext";

export const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { agregarAlCarrito } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const idItem = stockProductos.find((stock) => stock.id === Number(id));
    setDetalle(idItem);
  }, [id]);

  const agregarItem = (cantidad) => {
    let data = { ...detalle, quantity: cantidad };

    agregarAlCarrito(data);
  };

  return (
    <div>
      <ItemDetail detalle={detalle} agregarItem={agregarItem} />
    </div>
  );
};
