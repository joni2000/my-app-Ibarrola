import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { toThousand } from "../../helpers/cart/toThousand";

export const ItemCart = ({ product }) => {
  console.log(product);

  return (
    <Card sx={{ maxWidth: 700, cursor: "pointer" }}>
      <Grid container direction="row">
      <CardMedia
        component="img"
        height="110"
        image={product.pictureUrl}
        alt={`imagen de ${product.title}`}
        sx={{width: 110}}
      />

        <Typography Typography variant="subtitle1" color="price.main" component="span" sx={{ m:2 }}>
          {`$${ toThousand(product.price) }`}
        </Typography>

      </Grid>
    </Card>
  );
};
