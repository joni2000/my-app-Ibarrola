import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import { AppBar, IconButton, Toolbar, Grid, Typography, styled} from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { CategoriesContainer } from "../categorias/CategoriesContainer";
import { CartWidget } from "../cart/CartWidget";
import './navBar.css';

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
