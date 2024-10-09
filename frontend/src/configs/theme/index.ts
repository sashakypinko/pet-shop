import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '6rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.65,
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0D50FF',
      dark: '#282828',
    },
    secondary: {
      main: '#F1F3F4',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#282828',
      secondary: '#8B8B8B',
      disabled: '#DDDDDD',
    },
  },
});

export default responsiveFontSizes(lightTheme);
