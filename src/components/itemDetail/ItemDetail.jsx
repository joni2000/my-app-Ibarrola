import { Button, Grid, ImageListItem, Typography } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import { toThousand } from "../../helpers/cart/toThousand";
import { ItemCount } from "../itemCount/ItemCount";
export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const [productInCart, setProductInCart] = useState(false);

  const navigate = useNavigate();

  const onAdd = (counter) => {
    addItem(product, counter);
    setProductInCart(true);
  };

  console.log(productInCart);
  const { title, description, price, pictureUrl, stock } = product;

  return (
    <>
      <Grid item>
        <ImageListItem>
          <img src={pictureUrl} alt={`imagen de ${title}`} />
        </ImageListItem>
      </Grid>

      <Grid container direction="column" sx={{ gap: 0.5 }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p">{description}</Typography>
        <Typography variant="p" color="price.main">
          ${ toThousand( price ) }
        </Typography>

        { !productInCart && ( <ItemCount stock={stock} min={1} onAdd={onAdd} /> ) }
        
        { productInCart && ( 
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
