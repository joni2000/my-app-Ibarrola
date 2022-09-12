import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../itemList/ItemList";

export const ItemListConteiner = ({ greeting }) => {

  
  const [products, setProducts] = useState([]);
  
  const { id: categoryID } = useParams()
  
  useEffect(() => {
    fetch('/data/products.json')
    .then(res => res.json())
    .then( products =>  setProducts( products.data ))
  }, []);
  
  const productsFiltered = products?.filter( product => {
    return product.category === +categoryID
  })

  return (
    <Grid 
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      
      <ItemList products={ categoryID ? productsFiltered : products }/>
    </Grid>
  );
};
