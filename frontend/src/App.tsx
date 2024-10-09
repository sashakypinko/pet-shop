import {type ReactElement, useEffect} from 'react';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {getCartItems} from './store/cart/slice';
import SnackbarProvider from './components/custom-ui/snackbar';
import theme from './configs/theme';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Routes from './routes/routes';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

const App = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
      <ThemeProvider theme={theme}>
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
  );
};

export default App;
