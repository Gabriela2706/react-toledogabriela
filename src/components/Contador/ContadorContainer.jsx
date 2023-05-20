import { useState } from "react";
import { Contador } from "./Contador";
import Swal from "sweetalert2";

export const ContadorContainer = ({ stock, agregarItem }) => {
  const [contador, setContador] = useState(0);
  const alertaStockMaximo = () => {
    Swal.fire({
      title: "Producto sin Stock",
      icon: "warning",
    });
  };

  const sumarItem = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alertaStockMaximo();
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
