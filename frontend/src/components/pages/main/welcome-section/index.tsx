import { ReactElement } from 'react';
import { Box, styled, Typography } from '@mui/material';
import Button from '../../../custom-ui/button';
import { Link } from 'react-router-dom';
import { RouteEnum } from '../../../../routes/enums/route.enum';

const SectionContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  backgroundImage: `url(${require('../../../../assets/img/main-banner.jpg')})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  padding: '80px 40px 200px 40px',
  gap: 40,
});

const WelcomeSection = (): ReactElement => {
  return (
    <SectionContainer>
      <Typography variant="h1" color="#fff">
        Amazing Discounts
        <br />
        on Pets Products!
      </Typography>
      <Link to={RouteEnum.SALES}>
        <Button variant="contained">Check out</Button>
      </Link>
    </SectionContainer>
  );
};

export default WelcomeSection;
