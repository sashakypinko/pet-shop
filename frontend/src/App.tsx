import {type ReactElement, useEffect} from 'react';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import ColorModeContext from './configs/theme/context/color-mode.context';
import useColorMode from './configs/theme/hooks/use-color-mode.hook';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Routes from './routes/routes';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import {getCartItems} from './store/cart/slice';
import SnackbarProvider from './components/custom-ui/snackbar';

const App = (): ReactElement => {
  const {colorMode, currentTheme} = useColorMode();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={currentTheme}>
        <SnackbarProvider>
          <CssBaseline/>
          <Router>
            <Header/>
            <Container maxWidth="xl">
              <Routes/>
            </Container>
            <Footer/>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
