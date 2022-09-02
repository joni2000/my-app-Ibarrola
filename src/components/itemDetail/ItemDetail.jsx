import { Button, Grid, ImageListItem, Typography } from "@mui/material"
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ product }) => {

  const { title, description, price, pictureUrl, stock} = product;

  return (
    <>
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
          
          <ItemCount stock={ stock }/>

          <Button variant='contained' sx={{ width: "fit-content" }}>Agregar al carrito</Button>
          <Button variant='contained' sx={{ width: "fit-content" }}>Comprar Ahora</Button>
        </Grid>
    </>
  )
}
