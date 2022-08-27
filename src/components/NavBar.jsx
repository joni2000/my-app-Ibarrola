import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
import { CartWidget } from "./CartWidget";
import { SearchBar } from "./SearchBar";

export const NavBar = () => {
  return (
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
            <Typography size='small' fontWeight='bold' sx={{ fontSize: { sm: 25 } }} >SneakerCity</Typography>

            <SearchBar critBusqueda='productos y marcas'/>

            <CartWidget />
          </Grid>

      </Toolbar>
  </AppBar>
  ) 
};
