import { Card, CardMedia, Typography } from "@mui/material";
import { ContadorContainer } from "../Contador/ContadorContainer";

export const ItemDetail = ({ detalle, agregarItem }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h1" component="div">
          {detalle.title}
        </Typography>
        <div style={{ display: "flex" }}>
          <h4>{detalle.descripciondetalle}</h4>
        </div>
      </div>

      <div style={{ marginTop: "30px" }} key={detalle.id}>
        <Card sx={{ maxWidth: 345, height: 550 }}>
          <CardMedia sx={{ height: 380 }} image={detalle.img} />
        </Card>
      </div>
      <div>
        <ContadorContainer stock={detalle.stock} agregarItem={agregarItem} />
      </div>
    </div>
  );
};

export default ItemDetail;
