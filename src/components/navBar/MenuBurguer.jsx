import { MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const MenuBurguer = () => {
  return (
    <IconButton
      color="inherit"
      edge="start"
      sx={{ ml: 0.5, mr: 0.5, display: { sm: "none" } }}
    >
      <MenuOutlined />
    </IconButton>
  );
};
