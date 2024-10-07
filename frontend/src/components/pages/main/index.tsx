import {ReactElement} from 'react';
import {Box, styled, Typography} from '@mui/material';
import Button from '../../custom-ui/button';
import {Link} from 'react-router-dom';
import {RouteEnum} from '../../../routes/enums/route.enum';
import ContainerWithLink from '../../custom-ui/container-with-link';
import CategoryList from '../../shared/category-list';
import ProductList from '../../shared/product-list';

const WelcomeSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  backgroundImage: `url(${require('../../../assets/img/main-banner.jpg')})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  padding: '80px 40px 200px 40px',
  gap: 40,
});

const MainPage = (): ReactElement => {
  return (
    <Box display="flex" flexDirection="column">
      <WelcomeSection>
        <Typography variant="h1" color="#fff">
          Amazing Discounts
          <br/>
          on Pets Products!
        </Typography>
        <Link to={RouteEnum.SALES}>
          <Button variant="contained">Check out</Button>
        </Link>
      </WelcomeSection>
      <ContainerWithLink
        title="Categories"
        linkProps={{
          url: RouteEnum.CATEGORIES,
          label: 'All categories',
        }}
      >
        <CategoryList limit={4} />
      </ContainerWithLink>
      <ContainerWithLink
        title="Sale"
        linkProps={{
          url: RouteEnum.SALES,
          label: 'All sales',
        }}
      >
        <ProductList limit={4} discounted withoutFiler />
      </ContainerWithLink>
    </Box>
  );
};

export default MainPage;