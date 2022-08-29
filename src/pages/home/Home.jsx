import { Grid } from "@mui/material"
import { ItemListConteiner } from "../../components/itemListContainer/ItemListConteiner"
import { NavBar } from "../../components/navBar/NavBar"

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
