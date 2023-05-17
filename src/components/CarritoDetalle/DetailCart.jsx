import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Card, Typography } from "@mui/material";

function DetailCart() {
  const { cart, limpiarCarrito } = useContext(CartContext);

  return (
    <div>
      <Typography gutterBottom variant="h2" component="div">
        Detalle de Compra
      </Typography>
      {cart.map((e) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Card>
                <Typography gutterBottom variant="h4" component="div">
                  {e.title}
                </Typography>
              </Card>
            </div>

            <div style={{ marginTop: "30px" }} key={e.id}></div>
          </div>
        );
      })}

      <button onClick={limpiarCarrito}>limpiar carro</button>
    </div>
  );
}

export default DetailCart;
