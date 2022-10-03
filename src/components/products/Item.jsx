import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import { toThousand } from "../../helpers/cart/toThousand";

export const Item = ({ product }) => {

  let navigate = useNavigate();

  const { id, title, price, pictureUrl } = product;

  return (
    <Card 
      sx={{ width: 300, height: 300,cursor: 'pointer', position: 'relative'}}
      onClick={ ()=> navigate(`/item/${id}`)}
    >
        <CardHeader
          action={
            <IconButton aria-label="settings" sx={{ position: "absolute", top: 2, right: 3}}>
              <FavoriteBorderIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="150"
          image={pictureUrl}
          alt={`imagen de ${ title }`}
        />
        <CardContent>
          <Typography variant='p'>
            { title }
          </Typography> 
        </CardContent>
  
        <Typography variant="subtitle1" color="price.main" component="span" sx={{ m:2 }}>
        {`$${ toThousand(price) }`}
        </Typography>

    </Card>
  )
}
