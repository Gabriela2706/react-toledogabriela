import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { database } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { nombre } = useParams();

  useEffect(() => {
    let eleccion;
    const itemsCollection = collection(database, "stockProductos");
    if (nombre) {
      const itemsColecFiltrados = query(
        itemsCollection,
        where("categoria", "==", nombre)
      );
      eleccion = itemsColecFiltrados;
    } else {
      eleccion = itemsCollection;
    }

    getDocs(eleccion)
      .then((res) => {
        const productos = res.docs.map((producto) => {
          return {
            ...producto.data(),
            id: producto.id,
          };
        });
        setItems(productos);
      })
      .catch((err) => console.log(err));
  }, [nombre]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
