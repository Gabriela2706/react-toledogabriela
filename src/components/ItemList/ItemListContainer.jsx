import { stockProductos } from "../../productsMock";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { nombre } = useParams();
  console.log(nombre);

  useEffect(() => {
    const filtradoCategorias = stockProductos.filter(
      (stock) => stock.categoria === nombre
    );
    //declaro la promesa y le doy el resolve.
    const promesa = new Promise((resolve, reject) => {
      resolve(nombre ? filtradoCategorias : stockProductos);
    });

    promesa.then((res) => setItems(res)).catch((e) => console.log(e));
  }, [nombre]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
