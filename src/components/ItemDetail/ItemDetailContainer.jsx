import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { stockProductos } from "../../productsMock";

export const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const idItem = stockProductos.find((stock) => stock.id === Number(id));
    setDetalle(idItem);
  }, [id]);
  return (
    <div>
      <ItemDetail detalle={detalle} />
    </div>
  );
};
