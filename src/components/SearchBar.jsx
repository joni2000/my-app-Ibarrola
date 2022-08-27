import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ critBusqueda }) => {
  return (
    <TextField
      type="search"
      placeholder={`Buscar ${critBusqueda}`}
      size="small"
      sx={{ backgroundColor: "white", borderRadius: 1, width: 340 }}
      startIcon={<SearchIcon />}
      
    >
      
    </TextField>
  );
};
