import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#8e8e8e',
      main: '#80ff80',
      dark: '#373737',
      contrastText: '#fffde7',
    },
    secondary: {
      light: '#ffad42',
      main: '#ffcccc',
      dark: '#bb4d00',
      contrastText: '#fffde7',
    },
      openTitle: '#455a64',
      protectedTitle: '#f57c00',
      type: 'light'
    }
  })

  export default theme