import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: [
          'rubik'
        ].join(','),
        fontSize: 18,
      },
    palette: {
      primary: {
        light: '#FFFFFF',
        main: '#2B2C37',
        dark: '#828FA3',
        contrastText: '#fff'
      },
      secondary: {
        light: '#635FC7',
        main: '#635FC7',
        dark: '#06a',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
     

    },
  });
export default theme;