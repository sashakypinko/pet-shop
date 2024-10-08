import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { selectCategories } from '../../../store/selectors';
import { getCategories } from '../../../store/categories/slice';
import CategoryItem from './category-item';
import { ICategory } from '../../../services/api/category/dto/category.dto';
import CategoryListSkeleton from './skeleton';

interface Props {
  limit?: number;
}

const CategoryList = ({ limit }: Props): ReactElement => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector(selectCategories);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, []);

  if (loading) {
    return <CategoryListSkeleton />;
  }

  return (
    <Grid container spacing={4}>
      {categories.slice(0, limit).map((category: ICategory) => (
        <Grid key={category.id} item xs={12} sm={6} md={3}>
          <CategoryItem category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
