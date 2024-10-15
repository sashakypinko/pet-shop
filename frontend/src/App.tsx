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
import ErrorBoundary from './components/error-boundary';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import ScrollTop from './components/utils/scroll-top';

const App = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <SnackbarProvider>
            <CssBaseline/>
            <Router>
              <ScrollTop />
              <Header/>
              <Container maxWidth="xl">
                <Routes/>
              </Container>
              <Footer/>
            </Router>
          </SnackbarProvider>
        </ErrorBoundary>
      </ThemeProvider>
  );
};

export default App;
