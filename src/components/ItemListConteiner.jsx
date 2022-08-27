import { Grid } from "@mui/material";
import { ItemCount } from "./ItemCount";

export const ItemListConteiner = ({ greeting }) => {

  const product = {
    id: 1,
    name: "Notebook Lenovo",
    stock: 10,
    color: "red",
  };

  return (
    <Grid 
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <h1>ItemListConteiner</h1>
      <hr />

      <h3>{greeting}</h3>

      <ItemCount product={ product }/>
    </Grid>
  );
};
