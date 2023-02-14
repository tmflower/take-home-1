import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela round',
        'sans-serif',
      ].join(','),
      primary: {
        color: 'white'
      }
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: 'chocolate'
          }
        }
      }
    }
  });
  
  export default theme;