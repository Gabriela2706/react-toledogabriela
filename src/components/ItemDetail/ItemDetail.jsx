import { Card, CardMedia, Typography } from "@mui/material";
import { ContadorContainer } from "../Contador/ContadorContainer";

export const ItemDetail = ({ detalle, agregarItem }) => {
  return (
    <div style={{ marginBottom: 50 }}>
      <Typography gutterBottom variant="h3" component="div">
        Detalle del producto
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant="h3" component="div">
            {detalle.title}
          </Typography>
          <div style={{ display: "flex" }}>
            <h4>{detalle.descripciondetalle}</h4>
          </div>
          <Card sx={{ maxWidth: 345, height: 500 }}>
            <CardMedia
              sx={{ height: 500 }}
              image={detalle.img}
              title="green iguana"
            />
          </Card>
        </div>

        <div>
          <ContadorContainer stock={detalle.stock} agregarItem={agregarItem} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
