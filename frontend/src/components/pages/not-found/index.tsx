import { ReactElement } from 'react';
import { Box, Container, styled, Typography, useTheme } from '@mui/material';
import Button from '../../custom-ui/button';

const StyledContainer = styled(Container)({
  marginTop: 80,
  marginBottom: 80,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,
});

const Image = styled('img')({
  width: '100%',
  maxWidth: 740,
});

const NotFoundPage = (): ReactElement => {
  const theme = useTheme();

  return (
    <StyledContainer maxWidth="md">
      <Image src={require('../../../assets/img/404.png')} alt="404" />
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography align="center" variant="h2">
          Page Not Found
        </Typography>
        <Typography align="center" variant="subtitle1" color={theme.palette.text.secondary}>
          We’re sorry, the page you requested could not be found.
          <br />
          Please go back to the homepage.
        </Typography>
      </Box>
      <Button variant="contained">Go Home</Button>
    </StyledContainer>
  );
};

export default NotFoundPage;
