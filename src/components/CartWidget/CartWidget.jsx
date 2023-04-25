import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div>
      <Link to={"/detailcart"}>
        <ShoppingCartIcon style={{ color: "aliceblue" }} />
        <span style={{ color: "aliceblue" }}>0</span>
      </Link>
    </div>
  );
};
