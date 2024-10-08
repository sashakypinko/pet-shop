import { ReactElement } from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import DiscountForm from './discount-form';

const SectionContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 60,
  padding: 32,
  borderRadius: 12,
  background: 'linear-gradient(261deg, #2451C6 32.63%, #0D50FF 98.96%)',
  overflow: 'hidden',
});

const Image = styled('img')({
  width: '100%',
  position: 'relative',
  bottom: -80,
});

const DiscountSection = (): ReactElement => {
  return (
    <SectionContainer>
      <Typography variant="h2" color="#fff" align="center">
        5% off on the first order
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Image src={require('../../../../assets/img/pets.png')} alt="pets" />
        </Grid>
        <Grid item xs={12} md={5}>
          <DiscountForm />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default DiscountSection;
