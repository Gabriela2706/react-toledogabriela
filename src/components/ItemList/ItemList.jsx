import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./ItemList.css";
import { Link } from "react-router-dom";

export const ItemList = ({ items }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Typography gutterBottom variant="h3" component="div">
          Bienvenidos a POLA SUR
        </Typography>
      </div>
      <div className="contenedorItems">
        {items.map((item) => {
          return (
            <div style={{ marginTop: "10px" }} key={item.id}>
              <Card sx={{ maxWidth: 345, height: 580, marginBottom: "50px" }}>
                <CardMedia
                  sx={{ height: 380 }}
                  image={item.img}
                  //title="Foto del producto"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.descripcion}
                  </Typography>
                  <Button variant="outlined" size="small">
                    ${item.precio}
                  </Button>
                </CardContent>

                <Link
                  to={`/itemdetail/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button variant="contained">detalle</Button>
                  </CardActions>
                </Link>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
