import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { unidadesEnCarrito } = useContext(CartContext);
  let total = unidadesEnCarrito();

  return (
    <div style={{ margin: 20 }}>
      <Link
        to={"/detailcart"}
        style={{ display: "flex", flexDirection: "column-reverse" }}
      >
        <ShoppingCartIcon style={{ color: "aliceblue" }} />
        <span
          style={{
            color: "aliceblue",
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          {total}
        </span>
      </Link>
    </div>
  );
};
