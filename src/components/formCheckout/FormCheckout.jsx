import { Button, Grid, TextField } from "@mui/material"
import { useForm } from "../../hooks/UseForm";
import { FormLayout } from "../formLayout/FormLayout"

const FormData = {
    fullName: "",
    email: "",
    phone: ""
}
export const FormCheckout = ({ handleSubmit }) => {

    const { email, fullName, phone, onInputChange } = useForm( FormData ); 

  return (
    <FormLayout title="Datos del cliente">
      <form onSubmit={ handleSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre completo"
              fullWidth
              name="fullName"
              value={ fullName }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Telefono"
              type="number"
              placeholder="telefono"
              fullWidth
              name="phone"
              value={ phone }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                type="submit" 
                fullWidth
              >
                Finalizar compra
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </FormLayout>
  )
}
