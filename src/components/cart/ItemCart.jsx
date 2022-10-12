import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { CardMedia, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toThousand } from "../../helpers/toThousand";
import { Link } from "react-router-dom";

export const ItemCart = ({ product }) => {

  const { removeItem } = useContext(CartContext);

  const { id, title, quantity, price, pictureUrl } = product;

  return (
      <Grid
        container
        className="shadow animate__animated animate__slideInDown"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "95%", cursor: "pointer", height: 180 }}
      >
        <Link to={`/item/${id}`} >
          <CardMedia
            component="img"
            height="150"
            image={pictureUrl}
            alt={`imagen de ${title}`}
            sx={{ width: 300 }}
          />
        </Link>

        <Link to={`/item/${id}`} >
          <Typography variant="h6" componenent="h6" color="black.main">
            {title}
          </Typography>
        </Link>

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
  );
};
