import {createTheme} from '@mui/material/styles';
import {ThemeEnum} from './enums/theme.enum';
import {responsiveFontSizes} from '@mui/material';
import baseTypography from './base-typography';

const lightTheme = createTheme({
    typography: baseTypography,
    palette: {
        mode: ThemeEnum.LIGHT_MODE,
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
