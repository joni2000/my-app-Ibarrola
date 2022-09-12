import { Grid } from "@mui/material"
import { Item } from "../item/Item";

export const ItemList = ({ products }) => {

    return (
        <Grid 
            container 
            spacing={2}       
            justifyContent='center'
            alignItems='center'
            sx={{ mt: 1 }}
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
