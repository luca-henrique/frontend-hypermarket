import { createTheme } from '@material-ui/core'
import { COLORS } from '.'

export default createTheme({
  palette: {
    primary: {
      // works
      main: `${COLORS.primaryRed}`,
      contrastText: '#fff',
    },
    secondary: {
      // works
      main: `${COLORS.primaryRed}`,
      contrastText: '#fff',
    },
  },
})
