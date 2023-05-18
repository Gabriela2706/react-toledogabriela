import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";

export const DetailCart = () => {
  const { cart, limpiarCarrito, eliminarItemPorId, obtenerTotalCarrito } =
    useContext(CartContext);
  let total = obtenerTotalCarrito();

  return (
    <div>
      <Typography gutterBottom variant="h3" component="div">
        Detalle de Compra
      </Typography>
      {cart.map((detalle) => {
        return (
          <div>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <Card sx={{ maxWidth: 145, height: 250 }}>
                  <CardMedia image={detalle.img}></CardMedia>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Typography gutterBottom variant="h5" component="div">
                  {detalle.title}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography gutterBottom variant="h5" component="div">
                  Precio ${detalle.precio}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography gutterBottom variant="h5" component="div">
                  Cantidad: {detalle.quantity}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  onClick={() => eliminarItemPorId(detalle.id)}
                >
                  Eliminar producto
                </Button>
              </Grid>
            </Grid>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "flex-start",
        }}
      >
        <Button
          onClick={limpiarCarrito}
          variant="contained"
          style={{ margin: 20 }}
        >
          limpiar carro
        </Button>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{ margin: 20 }}
        >
          El total del carrito es {total}
        </Typography>
      </div>
    </div>
  );
};
