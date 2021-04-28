import { createMuiTheme } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';

// Configure Material UI theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: { main: "#4DC150", },
    secondary: red,
  },
});
export default theme;