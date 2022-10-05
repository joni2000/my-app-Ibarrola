import { Grid } from "@mui/material"
import { DemoCarousel } from "../components/carousel/DemoCarousel"
import { ItemListContainer } from "../components/products/"

export const Home = () => {
  return (
    <Grid 
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      height='auto'
    >
        <DemoCarousel />
        <ItemListContainer />
    </Grid>
  )
}
