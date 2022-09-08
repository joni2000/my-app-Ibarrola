import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const CategoriesMenu = () => {  
    
    const [openMenu, setOpenMenu] = useState(false);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/data/products.json')
            .then(res => res.json())
            .then( response =>  setCategories( response.data ))
    }, []);

  return (
    <> 
        <Grid 
            container 
            alignItems="center" 
            sx={{ width: "fit-content" }}
            onClick={()=> setOpenMenu( !openMenu ) }
        >
            <Typography variant="h6" sx={{ fontSize: { sm: 15 }} }></Typography>  Categorias
            <ArrowDropDownIcon fontSize="medium"/>
        </Grid>
    </>
  )
}
