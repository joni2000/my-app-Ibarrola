import { Grid, ImageListItem, Typography } from "@mui/material"

export const ItemDetail = ({ product }) => {

  const { title, description, price, pictureUrl} = product;

  return (
    <>
        <Grid item>
          <ImageListItem>
            <img src={ pictureUrl } alt={`imagen de ${ title }`}/>
          </ImageListItem>
        </Grid>

        <Grid 
          item
          direction="column"
        >
          <Typography variant='h4'>{ title }</Typography>
          <Typography variant='p'>{ description }</Typography>
          <Typography variant='p' color='price.main'>{ price }</Typography>
        </Grid>
    </>
  )
}
