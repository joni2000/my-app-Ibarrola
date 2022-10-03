import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CategoriesList } from "./CategoriesList";

export const CategoriesContainer = () => {  
    
    const [openMenu, setOpenMenu] = useState(false);

    const [categories, setCategories] = useState([]);
      
    useEffect(() => {
        fetch('/data/categories.json')
            .then(res => res.json())
            .then( response =>  setCategories( response.data ))
    }, []);

  return (
    <> 
        <Grid 
            container 
            alignItems="center" 
            sx={{ width: "fit-content", position: "relative" }}
            onClick={()=> setOpenMenu( !openMenu )}
        >
            <Typography variant="h6" sx={{ fontSize: { sm: 15 }} }></Typography>  Categorias
            <ArrowDropDownIcon fontSize="medium"/>

            {openMenu && ( <CategoriesList categories={ categories }/> )}

        </Grid>
    </>
  )
}
