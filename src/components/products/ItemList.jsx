import { Grid } from "@mui/material"
import { Item } from "./Item"

export const ItemList = ({ products }) => {

    return (
        <Grid 
            container 
            spacing={2}       
            justifyContent='center'
            alignItems='center'
            sx={{ my: 1 }}
        >
            {
                products.map(product => (

                    <Grid item key={ product.id }>
                        <Item product={ product }/>
                    </Grid>

                )) 
            }
        </Grid>
    )
}
