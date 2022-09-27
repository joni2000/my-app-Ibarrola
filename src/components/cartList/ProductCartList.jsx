import { Button, Grid, Typography, typographyClasses } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import { ItemCart } from "../itemCart/ItemCart";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { getTotal } from "../../helpers/cart/getTotal";
import { toThousand } from "../../helpers/cart/toThousand";

export const ProductCartList = () => {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <Grid
      container
      className="shadow"
      sx={{ p: 5, gap: 2 }}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      {
      cart.length > 0 &&
        cart.map((product) => (
          <ItemCart product={product} key={product.title} />
        ))
      }

      { cart.length > 0 && 
        <>
        <Typography color="price.main">Total: ${getTotal(cart)}</Typography> 
          <Button variant="contained">
            <Link to="/checkout" >
              Finalizar compra
            </Link>
          </Button>
        </>
      }

      {cart.length === 0 && (
        <>
            <Typography>El carrito esta vacío</Typography>

            <ShoppingCartCheckout sx={{ fontSize: 400, color: "primary.main" }} />
            
            <Button
              variant="contained"
              sx={{ width: "fit-content" }}
              onClick={() => navigate("/")}
            >
              seguir comprando
            </Button>
        </>
      )}
    </Grid>
  );
};
