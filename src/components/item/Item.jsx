import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Item = ({ product }) => {

  const { title, description, price, pictureUrl} = product;

  return (
    <Card sx={{ maxWidth: 250 }}>
        <CardHeader
          title={ title }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
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
