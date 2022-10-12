import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import { Button, Grid, Typography } from "@mui/material";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { getTotal } from "../../helpers/getTotal";
import { toThousand } from "../../helpers/toThousand";
import { ItemCart } from "./ItemCart";

export const ProductCartList = () => {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <Grid
      container
      className="shadow"
      sx={{ p: 5, gap: 2 }}
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
        <Grid container justifyContent="flex-end" alignItems="center" sx={{ gap: 2, width: "95%" }}>
        <Typography color="price.main">Total: ${toThousand( getTotal(cart) ) }</Typography> 
          <Button variant="contained">
            <Link to="/checkout" >
              Finalizar compra
            </Link>
          </Button>
        </Grid>
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
