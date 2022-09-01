import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";

export const Item = ({ product }) => {

  let navigate = useNavigate();

  const { id, title, description, price, pictureUrl } = product;

  return (
    <Card 
      sx={{ maxWidth: 250, cursor: 'pointer' }}
      onClick={ ()=> navigate(`/productDetail/${id}`)}
    >
        <CardHeader
          title={ title }
          action={
            <IconButton aria-label="settings" sx={{ zIndex: 22 }}>
              <FavoriteBorderIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="110"
          image={`${pictureUrl}`}
          alt={`imagen de ${ title }`}
        />
        <CardContent>
          <Typography variant='p'>
            { description }
          </Typography> 
        </CardContent>
  
        <Typography variant="subtitle1" color="price.main" component="span" sx={{ m:2 }}>
          ${price}
        </Typography>

    </Card>
  )
}
