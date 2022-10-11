import { Link } from "react-router-dom";
import { Box, List, ListItem, Typography } from "@mui/material";

export const CategoriesList = ({ categories }) => {

  return (
    <Box
      className="animate__animated animate__flipInX"
      sx={{
        width: "100%",
        maxWidth: 200,
        bgcolor: "black",
        position: "absolute",
        top: 22,
        left: 4,
        borderRadius: 1,
        opacity: "85%"
      }}
    >
      <List>
        { categories.map(({ id, title }) => (
          <ListItem disablePadding sx={{ ml: 2 }} key={ id }>
            <Link to={`/category/${ id }`}>
              <Typography sx={{ fontSize: { sm: 15 }, color: '#ffffff'}}>{ title }</Typography>
            </Link>
          </ListItem>
        ) )}
      </List>
    </Box>
  );
};
