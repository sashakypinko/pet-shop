import { ReactElement } from 'react';
import { Grid } from '@mui/material';
import CartList from './cart-list';
import OrderDetails from './order-details';
import ContainerWithLink from '../../custom-ui/container-with-link';
import { RouteEnum } from '../../../routes/enums/route.enum';

const ShoppingCartPage = (): ReactElement => {
  return (
    <ContainerWithLink
      title="Shopping cart"
      linkProps={{
        url: RouteEnum.MAIN,
        label: 'Back to the store',
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} md={5}>
          <OrderDetails />
        </Grid>
      </Grid>
    </ContainerWithLink>
  );
};

export default ShoppingCartPage;
