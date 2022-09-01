import { Grid, ImageListItem, Typography } from "@mui/material"

export const ItemDetail = ({ product }) => {

  const { title, description, price, pictureUrl} = product;

  return (
    <>
      <Grid container> 
        <Grid item>

        </Grid>

        <Grid item>
          <Typography variant='h4'>{ title }</Typography>
          <ImageListItem>
            <img src={ pictureUrl } alt={`imagen de ${ title }`}/>
          </ImageListItem>
          <Typography variant='p'>{ description }</Typography>
        </Grid>

      </Grid>
    </>
  )
}
