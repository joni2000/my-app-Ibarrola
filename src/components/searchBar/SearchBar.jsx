import { TextField } from "@mui/material";

export const SearchBar = ({ critBusqueda }) => {
  return (
    <TextField
      type='search'
      placeholder={`Buscar ${critBusqueda}`}
      size="small"
      color="primary"
      sx={{ backgroundColor: "white", borderRadius: 1, width: 340 }}
    >
      
    </TextField>
  );
};
