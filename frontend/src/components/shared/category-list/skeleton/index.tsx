import { ReactElement } from 'react';
import { Grid } from '@mui/material';
import CategoryItemSkeleton from '../category-item/skeleton';

interface Props {
  length?: number;
}

const CategoryListSkeleton = ({ length = 4 }: Props): ReactElement => {
  return (
    <Grid container spacing={4}>
      {Array.from({ length }).map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <CategoryItemSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryListSkeleton;
