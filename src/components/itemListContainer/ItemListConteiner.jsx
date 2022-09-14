import { Grid } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/products/ProductContext";
import { ItemList } from "../itemList/ItemList";

export const ItemListConteiner = () => {

  const  {products}  = useContext( ProductContext );

  const { id: categoryID } = useParams();
  
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
