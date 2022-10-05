import { Grid, Typography } from "@mui/material"

export const FormLayout = ({ children,  title = ''}) => {
  return (
    
    <Grid 
        container
        spacing={ 0 }
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ backgroundColor: 'white', p: 4 , justifyContent: 'center', margin: 0}}
    >

        <Grid item
            className="shadow"
            xs={ 3 }
            sx={{ 
                width: { sm: 450 },
                backgroundColor: 'white', 
                p: 3, 
                borderRadius: 2 
            }}
        > 

            <Typography variant="h5" sx={{ mb:1 }} >{ title }</Typography>
        
            { children }

        </Grid>

    </Grid>
  )
}