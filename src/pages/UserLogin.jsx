import { useState } from "react"
import { Button, TextField, ThemeProvider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save'
import '../App.css'

import { Container } from "@material-ui/core"
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core"
import { Box } from "@material-ui/core"
import 'fontsource-roboto';
import createPalette from "@material-ui/core/styles/createPalette"

function UserLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => setUsername(e.target.value)

    const handleSubmit = () => alert('Logged in! :)')

  return (
      <> 
       <Container style={{textAlign:'center'}}>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >
                <Box sx={{width:300}} style={{backgroundColor: '#175d80', padding: '25px', borderRadius: '6px'}} >
                    <Typography variant="h2" >Education App</Typography>
                    <Typography variant="subtitle1">Welcome to our app</Typography>
                    {/* Username textfield */}
                    <TextField variant="filled" color="primary" type="text" placeholder="Username"/>
                    {/* Password textfield */}
                    <TextField variant="filled" color="primary" type={"password"} placeholder="Password"/>
                    {/* <ButtonStyled /> */}
                    <Button startIcon={ <SaveIcon />} size="large" style={{fontSize:22, color:'white'}} onClick={handleSubmit} variant="contained" color='primary'>Login</Button>
                </Box>
        </Grid> 
       </Container>
    </>
  )
}

export default UserLogin