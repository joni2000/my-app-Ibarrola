import { Button, Grid, TextField } from "@mui/material"
import { useForm } from "../../hooks/UseForm";
import { FormLayout } from "../formLayout/FormLayout"

const reEmail = /\S+@\S+\.\S+/;
const rePhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

const FormData = {
    fullName: "",
    email: "",
    phone: ""
}


const formValidations = {
  fullName: [ (fnValue)=> fnValue > 6, 'el nombre debe tener mas de 6 caracteres' ],
  email: [ (emailValue) => reEmail.test(emailValue) , 'formato invalido'],
  phone: [ (phoneValue) => rePhone.test(phoneValue) , 'formato invalido'],
}
export const FormCheckout = ({ handleSubmit, showAlert  }) => {

    const { email, fullName, phone, onInputChange } = useForm( FormData, formValidations ); 

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
