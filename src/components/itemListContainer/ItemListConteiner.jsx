import { Grid } from "@mui/material";
import { ItemList } from "../itemList/ItemList";

export const ItemListConteiner = ({ greeting }) => {

  return (
    <Grid 
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >

      <ItemList />
    </Grid>
  );
};
