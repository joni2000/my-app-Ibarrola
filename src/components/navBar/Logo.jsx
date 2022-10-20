import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const Logo = () => {
  return (
    <Link to="/">
      <Typography
        size="small"
        fontWeight="bold"
        sx={{
          fontSize: { sm: 25 },
          color: "#ffffff",
        }}
      >
        SneakerCity
      </Typography>
    </Link>
  );
};
