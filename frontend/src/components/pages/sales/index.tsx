import { ReactElement, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../../store/selectors';
import { getProducts } from '../../../store/products/slice';
import ContainerWithBreadcrumbs from '../../custom-ui/container-with-breadcrumbs';
import ProductList from '../../shared/product-list';
import { RouteEnum } from '../../../routes/enums/route.enum';
import { IProduct } from '../../../services/api/product/dto/product.dto';

const breadcrumbLinks = [{ label: 'Main Page', url: RouteEnum.MAIN }, { label: 'All sales' }];

const SalesPage = (): ReactElement => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(selectProducts);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);

  const discountedProducts: IProduct[] = useMemo(() => {
    // eslint-disable-next-line camelcase
    return products.filter(({ discont_price }) => discont_price);
  }, [products]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <ContainerWithBreadcrumbs title="Discounted items" links={breadcrumbLinks}>
      <ProductList discounted />
    </ContainerWithBreadcrumbs>
  );
};

export default SalesPage;
