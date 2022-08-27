import { Grid } from "@mui/material"
import { ItemListConteiner, NavBar } from "../components"

export const Home = () => {
  return (
    <Grid 
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
        <NavBar />

        <ItemListConteiner greeting='Hola mundo de react'/>
    </Grid>
  )
}
