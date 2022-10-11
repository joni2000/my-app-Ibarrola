import { Button, Grid, ImageListItem, Typography } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import { toThousand } from "../../helpers/cart/toThousand";
import { ItemCount } from "../ItemCount";
export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const [productInCart, setProductInCart] = useState(false);

  const navigate = useNavigate();

  const onAdd = (counter) => {
    addItem(product, counter);
    setProductInCart(true);
  };

  const { title, description, price, pictureUrl, stock } = product;

  return (
    <>
      <Grid item>
        <ImageListItem  sx={{ width: 600 }}>
          <img src={pictureUrl} alt={`imagen de ${title}`} />
        </ImageListItem>
      </Grid>

      <Grid container direction="column" sx={{ gap: 2 }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p">{description}</Typography>
        <Typography variant="p" color="price.main">
          ${ toThousand( price ) }
        </Typography>

        { !productInCart && ( <ItemCount stock={stock} min={stock === 0 ? 0 : 1} onAdd={onAdd} /> ) }
        
        { stock === 0 && ( <Typography color="error.main">Agotado</Typography>) }

        { (productInCart && stock > 0 ) && ( 
              <Button
                variant="contained"
                sx={{ width: "fit-content" }}
                onClick={ ()=> navigate('/cart') }
              >
                Ir al carrito 
              </Button>
            )
        }


      </Grid>
    </>
  );
};
