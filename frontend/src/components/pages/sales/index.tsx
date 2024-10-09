import { ReactElement } from 'react';
import ContainerWithBreadcrumbs from '../../custom-ui/container-with-breadcrumbs';
import ProductList from '../../shared/product-list';
import { RouteEnum } from '../../../routes/enums/route.enum';

const breadcrumbLinks = [{ label: 'Main Page', url: RouteEnum.MAIN }, { label: 'All sales' }];

const SalesPage = (): ReactElement => {
  return (
    <ContainerWithBreadcrumbs title="Discounted items" links={breadcrumbLinks}>
      <ProductList discounted />
    </ContainerWithBreadcrumbs>
  );
};

export default SalesPage;
