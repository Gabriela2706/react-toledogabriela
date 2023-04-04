import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  return (
    <div>
      <ShoppingCartIcon style={{ color: "aliceblue" }} />
      <span style={{ color: "aliceblue" }}>0</span>
    </div>
  );
};
