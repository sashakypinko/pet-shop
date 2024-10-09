import { ReactElement, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../../store/selectors';
import ContainerWithBreadcrumbs from '../../custom-ui/container-with-breadcrumbs';
import ProductList from '../../shared/product-list';
import { RouteEnum } from '../../../routes/enums/route.enum';
import { useParams } from 'react-router-dom';
import { setSelectedCategory } from '../../../store/categories/slice';
import Loader from '../../custom-ui/loader';

const CategoryProductsPage = (): ReactElement | null => {
  const { id: categoryId } = useParams();
  const dispatch = useDispatch();
  const { selectedCategory, loading } = useSelector(selectCategories);

  useEffect(() => {
    if (categoryId) {
      dispatch(setSelectedCategory(parseInt(categoryId)));
    }
  }, [categoryId]);

  const breadcrumbLinks = useMemo(() => {
    return [
      { label: 'Main Page', url: RouteEnum.MAIN },
      { label: 'Categories', url: RouteEnum.CATEGORIES },
      { label: selectedCategory?.title || '' },
    ];
  }, [selectedCategory]);

  if (loading) {
    return <Loader />;
  }

  if (!selectedCategory) {
    // TODO: replace with error component
    return null;
  }

  return (
    <ContainerWithBreadcrumbs title={selectedCategory.title} links={breadcrumbLinks}>
      <ProductList categoryId={selectedCategory.id} />
    </ContainerWithBreadcrumbs>
  );
};

export default CategoryProductsPage;
