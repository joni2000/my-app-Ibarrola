import { Grid, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
export const ItemCount = ({ product }) => {

    const [counter, setCounter] = useState(0);

    const onAdd = (operacion)=> {
        if(operacion === 'suma') {
            setCounter( counter + 1 )
        }

        if(operacion === 'resta') {
            setCounter( counter - 1 )
        }
    }

  return (
    <Grid 
      container
      direction='row'
      alignItems='center'
      sx={{ gap: 2, border: 1, width: 'fit-content', borderRadius: 1}}
    >
      <IconButton
          color='primary'
          sx={{ borderRight: 1}}
          onClick={ ()=> counter < product.stock && onAdd('resta') }
      >
        <RemoveIcon />
      </IconButton>

      <Typography sx={{ alignItems: 'center' }}>{counter}</Typography>

      <IconButton
        color='primary'
        size='medium'
        sx={{ borderLeft: 1}}
        onClick={ ()=> counter < product.stock && onAdd('suma') }
      >
        <AddIcon variant='contained'/>
      </IconButton>
    </Grid>
  );
};