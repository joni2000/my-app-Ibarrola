import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom"
export const CartWidget = () => {

  const navigate = useNavigate()

  return (
    <IconButton color="inherit" size="small" onClick={ ()=> navigate('/cart') }>
      <ShoppingCartIcon/>
    </IconButton>
  );
};
