import { Grid } from "@mui/material"

export const Item = ({ product }) => {

  const { title, description, price, pictureUrl} = product;

  return (
    <Grid container>
        <h5>{title}</h5>
        <p>{description}</p>
        <span>{price}</span>
        <img src={`${pictureUrl}`} alt={`imagen de ${ title }`}></img>
    </Grid>
  )
}
