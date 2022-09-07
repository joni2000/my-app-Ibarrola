import { Grid } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail/ItemDetail"

export const ItemDetailContainer = () => {

  const [products, setProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
      fetch('/data/products.json')
          .then(res => res.json())
          .then( products =>  setProducts( products.data ))
  }, []);

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
