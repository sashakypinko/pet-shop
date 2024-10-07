import {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectProducts} from '../../../store/selectors';
import {getProducts} from '../../../store/products/slice';
import ProductList from '../../shared/product-list';
import ContainerWithBreadcrumbs from '../../custom-ui/container-with-breadcrumbs';
import {RouteEnum} from '../../../routes/enums/route.enum';

const breadcrumbLinks = [
  {label: 'Main Page', url: RouteEnum.MAIN},
  {label: 'All products'},
];

const ProductsPage = (): ReactElement => {
  const dispatch = useDispatch();
  const {products, loading} = useSelector(selectProducts);

  useEffect(() => {
    if(!products.length) {
      dispatch(getProducts());
    }
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <ContainerWithBreadcrumbs
      title="All products"
      links={breadcrumbLinks}
    >
      <ProductList />
    </ContainerWithBreadcrumbs>
  );
};

export default ProductsPage;