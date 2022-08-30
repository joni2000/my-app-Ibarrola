import { Grid } from "@mui/material"
import { useEffect, useState } from "react";
import { Item } from "../item/Item";

export const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data/products.json')
            .then(res => res.json())
            .then( products =>  setProducts( products.data ))
    }, []);

    return (
        <Grid container>
            {
                products.length > 0 && (
                products.map(product => (

                    <Grid item key={ product.id }>
                        <Item product={ product }/>
                    </Grid>

                )) )
            }
        </Grid>
    )
}
