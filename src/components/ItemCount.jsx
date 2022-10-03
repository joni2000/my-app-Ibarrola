import { useState } from "react";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export const ItemCount = ({ stock, min, onAdd }) => {

  const [counter, setCounter] = useState(min);
  const handlerCounter = (operacion) => {
    operacion === "suma" && setCounter(counter + 1)
    
    operacion === "resta" && setCounter(counter - 1)
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ gap: 2, border: 1, width: "fit-content", borderRadius: 1 }}
      >
        <IconButton
          color="primary"
          sx={{ borderRight: 1 }}
          onClick={() => counter > min && handlerCounter("resta")}
          disabled={counter === min && true}
        >
          <RemoveIcon />
        </IconButton>

        <Typography>{counter}</Typography>

        <IconButton
          color="primary"
          sx={{ borderLeft: 1 }}
          onClick={() => counter < stock && handlerCounter("suma")} 
          disabled={counter === stock && true}
        >
          <AddIcon variant="contained" />
        </IconButton>
      </Grid>
    
      {stock > 0 && (
        <Button
        variant="contained"
        sx={{ width: "fit-content" }}
        onClick={() => onAdd(counter)}
      >
        Agregar al carrito
      </Button>
      )
      }
    </>
  );
};
