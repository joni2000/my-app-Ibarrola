import { Grid } from "@mui/material"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/products/ProductContext";
import { ItemDetail } from "../itemDetail/ItemDetail"

export const ItemDetailContainer = () => {

  const { products } = useContext( ProductContext )

  const params = useParams();

  const product = products.find( product => product.id === +params.id )   

  return (
    <Grid 
      container 
      direction="row"
      justifyContent="center"
      sx={{ m: 3, p: 2, borderRadius: 1, flexWrap: 'noWrap'}}
      className="shadow"
    >
      { product && <ItemDetail product={ product }/> } 
    </Grid>
  )
}
