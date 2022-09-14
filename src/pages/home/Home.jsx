import { Grid } from "@mui/material"
import { ItemListConteiner } from "../../components/itemListContainer/ItemListConteiner"

export const Home = () => {
  return (
    <Grid 
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >

        <ItemListConteiner />
    </Grid>
  )
}
