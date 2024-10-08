import { ReactElement } from 'react';
import { Box, Skeleton, styled } from '@mui/material';

const ImageSkeleton = styled(Skeleton)({
  width: '100%',
  height: '100%',
  aspectRatio: '1 / 0.8',
  borderRadius: 12,
});

const TitleSkeleton = styled(Skeleton)({
  width: '60%',
  marginLeft: 32,
});

const PriceSkeleton = styled(Skeleton)({
  marginLeft: 32,
  height: 80,
  width: 120,
});

const ProductItemSkeleton = (): ReactElement => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <ImageSkeleton variant="rounded" />
      <Box>
        <TitleSkeleton variant="text" />
        <PriceSkeleton variant="text" />
      </Box>
    </Box>
  );
};

export default ProductItemSkeleton;
