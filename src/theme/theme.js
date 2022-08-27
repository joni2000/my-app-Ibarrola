import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const theme = ()=> createTheme({
    palette: {
        primary: {
            light: '#570A57',
            main: '#2E0249',
        },
        secondary: {
            main: '#570A57'
        },
        black: {
            main: grey.A700
        },
        error: {
            main: red.A400
        }
    }
})