import { useState } from "react";
import { Contador } from "./Contador";

export const ContadorContainer = ({ stock, agregarItem }) => {
  const [contador, setContador] = useState(0);

  const sumarItem = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("stock Maximo");
    }
  };

  const restarItem = () => {
    contador > 0 && setContador(contador - 1);
  };

  return (
    <div>
      <Contador
        contador={contador}
        sumarItem={sumarItem}
        restarItem={restarItem}
        agregarItem={agregarItem}
      />
    </div>
  );
};
