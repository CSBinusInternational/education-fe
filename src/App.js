import { ThemeProvider, createTheme } from "@material-ui/core";
import { orange, green } from "@material-ui/core/colors";
import Navbar from "./pages/Navbar";
import UserLogin from "./pages/UserLogin";


// Define new custom theme to use in themeprovider for whole app
const theme = createTheme({
  // Define custom typography
  typography: {
    h2: {
      fontSize: 38,
      color: 'white',
    },
    subtitle1: {
      color: 'white',
    }
  },
  // Define colors, primary & secondary
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[400]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Navbar />
      <UserLogin />
    </ThemeProvider> 
  );
}

export default App;
