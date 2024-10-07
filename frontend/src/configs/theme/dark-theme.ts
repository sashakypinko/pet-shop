import { createTheme } from '@mui/material/styles';
import { ThemeEnum } from './enums/theme.enum';
import baseTypography from './base-typography';

const darkTheme = createTheme({
  typography: baseTypography,
  palette: {
    mode: ThemeEnum.DARK_MODE,
    primary: {
      main: '#0D50FF',
    },
    secondary: {
      main: '#282828',
    },
    grey: {
      '100': '#282828',
      '200': '#DDDDDD',
      '300': '#8B8B8B',
    },
    background: {
      default: '#212022',
    },
    text: {
      primary: '#ffffff',
      secondary: '#787878',
    }
  },
});

export default darkTheme;
