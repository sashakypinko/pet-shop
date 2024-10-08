import { ReactElement } from 'react';
import { Box, Skeleton, styled } from '@mui/material';

const ImageSkeleton = styled(Skeleton)({
  width: '100%',
  height: '100%',
  aspectRatio: '1 / 1.1',
  borderRadius: 12,
});

const TextSkeleton = styled(Skeleton)({
  width: '70%',
  alignSelf: 'center',
});

const CategoryItemSkeleton = (): ReactElement => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <ImageSkeleton variant="rounded" />
      <TextSkeleton variant="text" />
    </Box>
  );
};

export default CategoryItemSkeleton;
