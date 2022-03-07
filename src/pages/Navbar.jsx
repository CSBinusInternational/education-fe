import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Education App
          </Typography>
          <Button>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar