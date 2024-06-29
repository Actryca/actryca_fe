
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      900: '#231b32',
      800: '#322748',
      600: '#513f75',
      500: '#614B8B',
      100: '#C6BED5',
      50: '#E3DAF3',
    },
    starColor: {
      main: '#FF7A00',
    },
  },
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    h1: {
      fontFamily: 'DM Serif Text, serif',
    },
    h2: {
      fontFamily: 'DM Serif Text, serif',
    },

  },
});

export default theme;
