import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CategoriesList } from "./CategoriesList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

export const CategoriesContainer = () => {
  const [openMenu, setOpenMenu] = useState(false); //estado para cerrar y abrir el menu 

  const [categories, setCategories] = useState();
  const getData = async () => { //funcion para obtener categories
    try {
        const docRef = collection(db, "categories")
        const cat = await getDocs( docRef )
        const result = cat.docs.map(
            (doc) => (doc = { id: doc.id, ...doc.data() })
        );
        setCategories(result)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{ width: "fit-content", position: "relative", cursor: "pointer"}}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <Typography variant="h4" sx={{ fontSize: 16,  }}>Categorias</Typography>
          
        <ExpandMoreIcon fontSize="medium" />
          { openMenu && <CategoriesList categories={categories} />} {/* si openMenu == true despliega el dropdown de categorias */}
      </Grid>
    </>
  );
};
