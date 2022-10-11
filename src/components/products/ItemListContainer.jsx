import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';
import { ClipLoader } from "react-spinners";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {

  const { id : categoryId } = useParams();

  const [products, setProducts] = useState();
  const [load, setLoad] = useState(true);
  const getData = async (categoria) => {
    try {
      setLoad(true)
      const document = categoria ? query(collection(db, "products"), where("category", "==", +categoria))
        : collection(db, "products")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
      setProducts(result)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData(categoryId)
  }, [categoryId])

  console.log(products)
  return (
    <Grid 
    container
    direction='column'
    justifyContent='center'
    alignItems='center'
    >
    {
      load ? 
            <ClipLoader color="primary.main" size="100"/> 
    /* else */: <ItemList products={ products }/>
    }
    </Grid> 
  );
};
