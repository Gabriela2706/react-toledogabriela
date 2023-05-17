import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Link to={"/detailcart"}>
        <ShoppingCartIcon style={{ color: "aliceblue" }} />
        <span style={{ color: "aliceblue" }}>{cart.length}</span>
      </Link>
    </div>
  );
};
