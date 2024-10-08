import { ReactElement } from 'react';
import ContainerWithBreadcrumbs from '../../custom-ui/container-with-breadcrumbs';
import { RouteEnum } from '../../../routes/enums/route.enum';
import CategoryList from '../../shared/category-list';

const breadcrumbLinks = [{ label: 'Main Page', url: RouteEnum.MAIN }, { label: 'Categories' }];

const CategoriesPage = (): ReactElement => {
  return (
    <ContainerWithBreadcrumbs title="Categories" links={breadcrumbLinks}>
      <CategoryList />
    </ContainerWithBreadcrumbs>
  );
};

export default CategoriesPage;
