import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { toThousand } from "../../helpers/toThousand";

export const Item = ({ product }) => {

  let navigate = useNavigate();

  const { id, title, price, pictureUrl } = product;

  return (
    <Card 
      className="animate__animated animate__zoomIn"
      sx={{ width: 300, height: 300,cursor: 'pointer', position: 'relative'}}
      onClick={ ()=> navigate(`/item/${id}`)} // navega al detalle del producto
    >
        <CardHeader />
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
          {`$${ toThousand(price) }`} {/* toThousand: le da formato de miles al precio */}
        </Typography>

    </Card>
  )
}
