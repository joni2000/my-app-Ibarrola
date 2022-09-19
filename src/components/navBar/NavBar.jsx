import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography, styled} from "@mui/material";
import { CartWidget } from "../cartWidget/CartWidget";
import { SearchBar } from "../searchBar/SearchBar";
import { Link } from "react-router-dom"
import { CategoriesContainer } from "../categoriesContainer/CategoriesContainer";
import { useContext } from "react";
import './navBar.css';
import { CartContext } from "../../context/cart/CartContext";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
export const NavBar = () => {

  const { cart } = useContext(CartContext)

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar sx={{ p: 0 }}>
            <IconButton 
              color='inherit'
              edge='start'
              sx={{ml: 0.5, mr: 0.5, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid 
              container 
              direction='row' 
              justifyContent='space-between' 
              alignItems='center'
            >
              <Link to='/'>
                <Typography size='small' fontWeight='bold' sx={{ fontSize: { sm: 25 }, color: '#ffffff'}} >SneakerCity</Typography>
              </Link>

              <SearchBar critBusqueda='productos y marcas'/>

              <CategoriesContainer />


              {
                cart.length > 0 && ( 
                  <CartWidget cant={cart.length}/> 
                )
              }
              
            </Grid>

        </Toolbar>
      </AppBar>

      <Offset />
    </>
  
  ) 
};
