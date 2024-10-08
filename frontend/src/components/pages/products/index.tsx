import { ReactElement } from 'react';
import ProductList from '../../shared/product-list';
import ContainerWithBreadcrumbs from '../../custom-ui/container-with-breadcrumbs';
import { RouteEnum } from '../../../routes/enums/route.enum';

const breadcrumbLinks = [{ label: 'Main Page', url: RouteEnum.MAIN }, { label: 'All products' }];

const ProductsPage = (): ReactElement => {
  return (
    <ContainerWithBreadcrumbs title="All products" links={breadcrumbLinks}>
      <ProductList />
    </ContainerWithBreadcrumbs>
  );
};

export default ProductsPage;
