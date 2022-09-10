import { Grid, ImageListItem, Typography } from "@mui/material"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ product }) => {

  const { addItem, cart, removeItem } = useContext(CartContext)

  const { title, description, price, pictureUrl, stock} = product;
  
  const onAdd = ( counter )=> {
    addItem( product, counter )
  }

  
  return (
    <>
    { console.log(cart) }
        <Grid item>
          <ImageListItem>
            <img src={ pictureUrl } alt={`imagen de ${ title }`}/>
          </ImageListItem>
        </Grid>

        <Grid 
          container
          direction="column"
          sx={{ gap: 0.5 }}
        >
          <Typography variant='h4'>{ title }</Typography>
          <Typography variant='p'>{ description }</Typography>
          <Typography variant='p' color='price.main'>{ price }</Typography>

          <ItemCount stock={ stock } min={1} onAdd={ onAdd }/>


          <button onClick={()=> removeItem(product.id)}>eliminar</button>
        </Grid>
    </>
  )
}
