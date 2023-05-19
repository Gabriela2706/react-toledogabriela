import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../context/CartContext";
import { database } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { agregarAlCarrito } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const itemsCollectionDetail = collection(database, "stockProductos");
    const refDoc = doc(itemsCollectionDetail, id);
    getDoc(refDoc)
      .then((res) => setDetalle({ ...res.data(), id: res.id }))
      .catch((err) => console.log(err));
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
