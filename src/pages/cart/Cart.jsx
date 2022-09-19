import { Grid } from "@mui/material"
import { ProductCartList } from "../../components/cartList/ProductCartList"

export const Cart = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{p: 5, gap: 2}}
    >
      <ProductCartList />
    </Grid>
  )
}
