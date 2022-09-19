import { Card, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { toThousand } from "../../helpers/cart/toThousand";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";

export const ItemCart = ({ product }) => {

  const { removeItem } = useContext(CartContext);

  const { id, title, quantity, price, pictureUrl } = product;

  console.log(product)

  return (
    <Card sx={{ width: 1000, maxWidth: 1500, cursor: "pointer" }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <CardMedia
          component="img"
          height="150"
          image={pictureUrl}
          alt={`imagen de ${title}`}
          sx={{ width: 150 }}
        />

        <Typography variant="h6" componenent="h6">
          {title}
        </Typography>

        <Typography variant="subtitle1" component="p" sx={{ m: 2 }}>
          Cantidad: {quantity}
        </Typography>

        <Typography
          variant="subtitle1"
          color="price.main"
          component="span"
          sx={{ m: 2 }}
        >
          {`$${toThousand(price)}`}
        </Typography>
        .
        <IconButton
          sx={{ alignSelf: "flex-start", color: "red", opacity: "80%" }}
          onClick={() => removeItem(id) }
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Card>
  );
};
