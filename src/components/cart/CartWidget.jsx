import { useNavigate } from "react-router-dom"
import { IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = ({ cant }) => {

  const navigate = useNavigate()

  return (
    <IconButton color="inherit" size="small" onClick={ ()=> navigate('/cart') }>
      <ShoppingCartIcon/>
      <Typography variant="p" sx={{ mb: 2 }}>{ cant }</Typography>
    </IconButton>
  );
};
