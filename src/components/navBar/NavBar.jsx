import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { AppBar, Toolbar, Grid, styled} from "@mui/material";
import { CategoriesContainer } from "../categorias/CategoriesContainer";
import { Logo } from "./Logo";
import { MenuBurguer } from "./MenuBurguer";
import { CartWidget } from "./CartWidget";
import './navBar.css';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar); //componente por detras del header para que no se superponga  
export const NavBar = () => {

  const { cart } = useContext(CartContext)

  return (
    <>
      <AppBar position='fixed' >
        <Toolbar sx={{ p: 0 }}>
            <MenuBurguer />

            <Grid 
              container 
              justifyContent='space-between' 
              alignItems='center'
            >
              <Logo />

              <Grid 
                item
                sx={{display: 'flex', gap: 3}} 
              >
                <CategoriesContainer />

                {
                  cart.length > 0 && (  //muestra el icono de carrito si el array de productos del carrito es mayor a 0
                    <CartWidget cant={cart.length}/> 
                  )
                } 
              </Grid>
            </Grid>

        </Toolbar>
      </AppBar>

      <Offset />
    </>
  
  ) 
};
