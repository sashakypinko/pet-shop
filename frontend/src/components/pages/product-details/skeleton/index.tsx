import { ReactElement } from 'react';
import { Grid, Skeleton, styled } from '@mui/material';

const ImageSkeleton = styled(Skeleton)({
  borderRadius: 12,
  height: 'auto',
  aspectRatio: '1 / 1',
});

const ProductDetailsSkeleton = (): ReactElement => {
  return (
    <Grid sx={{ mt: 20 }} container spacing={4}>
      <Grid item xs={12} md={5}>
        <ImageSkeleton variant="rectangular" />
      </Grid>
      <Grid item xs={12} md={7}>
        <Skeleton variant="text" height={120} />
        <Skeleton variant="text" height={120} width={280} />
        <Skeleton variant="text" height={100} />
        <Skeleton sx={{ mt: 1 }} variant="text" height={40} width={150} />
        <Skeleton sx={{ mt: 1, borderRadius: 1 }} variant="rectangular" height={200} />
      </Grid>
    </Grid>
  );
};

export default ProductDetailsSkeleton;
