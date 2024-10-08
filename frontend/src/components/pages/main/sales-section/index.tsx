import { ReactElement } from 'react';
import { RouteEnum } from '../../../../routes/enums/route.enum';
import ProductList from '../../../shared/product-list';
import ContainerWithLink from '../../../custom-ui/container-with-link';

const SalesSection = (): ReactElement => {
  return (
    <ContainerWithLink
      title="Sale"
      linkProps={{
        url: RouteEnum.SALES,
        label: 'All sales',
      }}
    >
      <ProductList limit={4} discounted withoutFiler />
    </ContainerWithLink>
  );
};

export default SalesSection;
