import { Button, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import { Link } from "react-router-dom";
export const ItemCount = ({ stock, min , onAdd }) => {

    const [counter, setCounter] = useState(min);

    const handlerCounter = (operacion)=> {
        if(operacion === 'suma') {
            setCounter( counter + 1 )
        }

        if(operacion === 'resta') {
            setCounter( counter - 1 )
        }
    }

  return (
    <>
      <Grid 
      container
      direction='row'
      alignItems='center'
      sx={{ gap: 2, border: 1, width: 'fit-content', borderRadius: 1}}
    >
      <IconButton
          color='primary'
          sx={{ borderRight: 1}}
          onClick={ ()=> counter > min && handlerCounter('resta') }
          disabled={ counter === min && true }
      >
        <RemoveIcon />
      </IconButton>

      <Typography>{counter}</Typography>

      <IconButton
        color='primary'
        size='medium'
        sx={{ borderLeft: 1}}
        onClick={ ()=> counter < stock && handlerCounter('suma') }
        disabled={ counter === stock && true }
      >
        <AddIcon variant='contained'/>
      </IconButton>


    </Grid>

    <Button 
      variant='contained' 
      sx={{ width: "fit-content" }}
      onClick={ ()=> onAdd( counter ) }
    >
          Agregar al carrito
    </Button>

    <Button variant='contained' sx={{ width: "fit-content" }}>
      <Link to='/cart'>Comprar ahora</Link>  
    </Button>
    </>
  );
};
