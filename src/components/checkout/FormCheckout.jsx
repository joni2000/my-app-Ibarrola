import { useForm } from "../../hooks/UseForm";
import { Button, Grid, TextField } from "@mui/material"
import { FormLayout } from "./FormLayout"

const reEmail = /\S+@\S+\.\S+/;
const rePhone = /^(?=(\D*\d){11}$)\(?\d{3,5}\)?[- .]?\d{2,4}[- .]?\d{4}$/

const FormData = {
    fullName: "",
    email: "",
    phone: ""
}


const formValidations = {
  fullName: [ (fnValue) => true , 'el nombre debe tener mas de 6 caracteres' ],
  email: [ (emailValue) => reEmail.test(emailValue) , 'formato invalido'],
  phone: [ (phoneValue) => phoneValue.length > 4 , 'formato invalido'],
}
export const FormCheckout = ({ handleSubmit, showAlert, formSubmitted  }) => {

    const { email, fullName, phone, onInputChange, emailValid, phoneValid, fullNameValid, isFormValid } = useForm( FormData, formValidations ); 

    console.log(`email: ${emailValid}, fullName: ${fullNameValid}, phone: ${phoneValid}`)
  return (
    <FormLayout title="Datos del cliente">
      <form onSubmit={ (e)=> handleSubmit( e, isFormValid ) }> 
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
              error={ !!fullNameValid && formSubmitted }
              helperText={ formSubmitted && fullNameValid }
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
              error={ !!emailValid && formSubmitted}
              helperText={ formSubmitted && emailValid }
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
              error={ !!phoneValid && formSubmitted }
              helperText={ formSubmitted && phoneValid }
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
