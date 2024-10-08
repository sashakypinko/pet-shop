import { ReactElement } from 'react';
import { Box } from '@mui/material';
import WelcomeSection from './welcome-section';
import CategoriesSection from './categopries-section';
import DiscountSection from './discount-section';
import SalesSection from './sales-section';

const MainPage = (): ReactElement => {
  return (
    <Box display="flex" flexDirection="column" gap={10}>
      <WelcomeSection />
      <CategoriesSection />
      <DiscountSection />
      <SalesSection />
    </Box>
  );
};

export default MainPage;
