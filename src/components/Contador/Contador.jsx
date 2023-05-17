import { Remove } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";

import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

export const Contador = ({ contador, sumarItem, restarItem, agregarItem }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 100,
      }}
    >
      <Fab
        color="primary"
        aria-label="add"
        style={{ margin: 15 }}
        onClick={sumarItem}
      >
        <AddIcon />
      </Fab>

      <Fab style={{ margin: 15 }}>{contador}</Fab>

      <Fab
        color="secondary"
        aria-label="edit"
        style={{ margin: 15 }}
        onClick={restarItem}
      >
        <Remove />
      </Fab>

      <Link to={"/detailcart"} style={{ textDecoration: "none" }}>
        <Fab
          variant="extended"
          style={{ margin: 15 }}
          onClick={() => agregarItem(contador)}
        >
          <NavigationIcon sx={{ mr: 1 }} />
          Agregar al Carrito
        </Fab>
      </Link>
    </div>
  );
};
