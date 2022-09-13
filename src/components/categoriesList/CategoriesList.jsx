import { Box, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CategoriesList = ({ categories }) => {

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 200,
        bgcolor: "black",
        position: "absolute",
        top: 23,
        left: 4,
        borderRadius: 1
      }}
    >
      <List>
        { categories.map(({ id, name }) => (
          <ListItem disablePadding sx={{ textAlign: "center" }} key={ id }>
            <Link to={`/category/${ id }`}>
              <Typography sx={{ fontSize: { sm: 15 }, color: '#ffffff'}}>{ name }</Typography>
            </Link>
          </ListItem>
        ) )}
      </List>
    </Box>
  );
};
