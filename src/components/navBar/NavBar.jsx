import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography, styled} from "@mui/material";
import { CartWidget } from "../cartWidget/CartWidget";
import { SearchBar } from "../searchBar/SearchBar";
import { Link } from "react-router-dom"

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
export const NavBar = () => {

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

              <CartWidget />
            </Grid>

        </Toolbar>
      </AppBar>

      <Offset />
    </>
  
  ) 
};
