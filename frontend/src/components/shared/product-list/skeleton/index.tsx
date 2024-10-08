import { ReactElement } from 'react';
import { Grid } from '@mui/material';
import ProductItemSkeleton from '../product-item/skeleton';

interface Props {
  length?: number;
}

const ProductListSkeleton = ({ length = 4 }: Props): ReactElement => {
  return (
    <Grid container spacing={4}>
      {Array.from({ length }).map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <ProductItemSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListSkeleton;
