import { ReactElement } from 'react';
import { RouteEnum } from '../../../../routes/enums/route.enum';
import CategoryList from '../../../shared/category-list';
import ContainerWithLink from '../../../custom-ui/container-with-link';

const CategoriesSection = (): ReactElement => {
  return (
    <ContainerWithLink
      title="Categories"
      linkProps={{
        url: RouteEnum.CATEGORIES,
        label: 'All categories',
      }}
    >
      <CategoryList limit={4} />
    </ContainerWithLink>
  );
};

export default CategoriesSection;
