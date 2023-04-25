import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ItemDetail = ({ detalle }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginTop: "30px" }} key={detalle.id}>
        <Card sx={{ maxWidth: 345, height: 550 }}>
          <CardMedia sx={{ height: 380 }} image={detalle.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {detalle.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {detalle.descripcion}
            </Typography>
          </CardContent>
          <Link to={"/detailcart"} style={{ textDecoration: "none" }}>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="contained">Agregar al carrito</Button>
            </CardActions>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
