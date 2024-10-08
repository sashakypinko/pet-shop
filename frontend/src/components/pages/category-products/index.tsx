import { ReactElement, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../../store/selectors';
import ContainerWithBreadcrumbs from '../../custom-ui/container-with-breadcrumbs';
import ProductList from '../../shared/product-list';
import { RouteEnum } from '../../../routes/enums/route.enum';
import { useParams } from 'react-router-dom';
import { getCategories } from '../../../store/categories/slice';
import { ICategory } from '../../../services/api/category/dto/category.dto';

const CategoryProductsPage = (): ReactElement => {
  const { id: categoryId } = useParams();
  const dispatch = useDispatch();
  const { categories, loading: categoriesLoading } = useSelector(selectCategories);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, []);

  const selectedCategory: ICategory | null = useMemo(() => {
    return categories.find(({ id }) => id.toString() === categoryId) || null;
  }, [categories, categoryId]);

  const breadcrumbLinks = useMemo(() => {
    return [
      { label: 'Main Page', url: RouteEnum.MAIN },
      { label: 'Categories', url: RouteEnum.CATEGORIES },
      { label: selectedCategory?.title || '' },
    ];
  }, [selectedCategory]);

  if (categoriesLoading || !selectedCategory) {
    return <>Loading...</>;
  }

  return (
    <ContainerWithBreadcrumbs title={selectedCategory.title} links={breadcrumbLinks}>
      <ProductList categoryId={selectedCategory.id} />
    </ContainerWithBreadcrumbs>
  );
};

export default CategoryProductsPage;
